
import { Component, HostListener, Injector } from '@angular/core';
import { LocalStorage } from '../../services/local-storage';
import { BasePage } from '../base-page/base-page';
import { WalkthroughPage } from '../walkthrough/walkthrough';
import { Installation } from 'src/app/services/installation';
import { AppConfigService } from 'src/app/services/app-config.service';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class SettingsPage extends BasePage {

  @HostListener('window:popstate')
  onPopState() {
    if (isPlatform('android') && isPlatform('mobileweb')) {
      this.modalCtrl.dismiss();
    }
  }

  public canShowIntroButton: boolean;

  constructor(injector: Injector,
    private appConfigService: AppConfigService,
    private installationService: Installation,
    private storage: LocalStorage) {
    super(injector);
  }

  enableMenuSwipe() {
    return true;
  }

  ngOnInit() {
    this.loadAppConfig();

    if (isPlatform('android') && isPlatform('mobileweb')) {
      history.pushState({ modal: true }, null);
    }
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  async loadAppConfig() {
    try {
      const config = await this.appConfigService.load();
      this.canShowIntroButton = !config?.slides?.disabled;
    } catch (err) {
      console.log(err);
    }
  }

  async onChangeIsPushEnabled(event: CustomEvent) {

    if (!event) return;

    const isPushEnabled = event.detail.checked;

    try {

      const id = await this.storage.getInstallationObjectId();

      await this.installationService.save(id, {
        isPushEnabled: isPushEnabled
      });

      this.storage.setIsPushEnabled(isPushEnabled);
      this.preference.isPushEnabled = isPushEnabled;

    } catch (error) {
      console.warn(error);
    }

  }

  onChangeDarkMode(event: CustomEvent) {
    if (!event) return;

    const isDarkModeEnabled = event.detail.checked;

    window.dispatchEvent(new CustomEvent('dark-mode:change', {
      detail: isDarkModeEnabled
    }));
  }

  onChangeUnit(event: CustomEvent) {

    if (!event) return;

    const unit = event.detail.value;

    this.storage.setUnit(unit);
    this.preference.unit = unit;
  }

  onChangeLang(event: CustomEvent) {

    if (!event) return;

    const lang = event.detail.value;
    window.dispatchEvent(new CustomEvent("lang:change", { detail: lang }));
  }

  async presentWalkthroughModal() {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: WalkthroughPage
    });

    await modal.present();

    this.dismissLoadingView();

  }

}

export const environment = {
  production: false,
  serverUrl: 'https://nearmev5.quanlabs.com/parse',
  appUrl: 'https://trynearme.app',
  appImageUrl: 'https://trynearme.app/assets/img/nearme.png',
  appId: 'YOUR_APP_ID',
  fbId: 'YOUR_FB_ID',
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  androidHeaderColor: '#d82c6b',
  defaultUnit: 'km',
  defaultLang: 'en',
  googleClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
  stripePublicKey: 'YOUR_STRIPE_PUBLIC_KEY',
  oneSignal: {
    appId: 'YOUR_ONESIGNAL_APP_ID',
  },
  currency: {
    code: 'USD',
    display: 'symbol',
    digitsInfo: '1.2-2',
  }
};

import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

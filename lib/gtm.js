import TagManager from '@gtm-support/react-gtm';

export const GTM_ID = 'GTM-T3NKKV8P'; // Your GTM ID

export const initGTM = () => {
  TagManager.initialize({
    gtmId: GTM_ID,
    events: {
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    },
  });
};

export const trackPageView = (url) => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'page_view',
      page: url,
    },
  });
};

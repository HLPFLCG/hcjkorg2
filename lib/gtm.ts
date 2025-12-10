// lib/gtm.ts
export const GTM_ID = 'GTM-T3NKKV8P';

export const GTM_EVENTS = {
  PAGE_VIEW: 'page_view',
  PHOTO_VIEW: 'photo_view',
  COLLECTION_VIEW: 'collection_view',
  CONTACT_FORM: 'contact_form',
  THEME_TOGGLE: 'theme_toggle',
} as const;

export interface GTMEvent {
  event: string;
  page_title?: string;
  page_location?: string;
  photo_title?: string;
  collection_name?: string;
  user_theme?: string;
}

export const trackEvent = (event: GTMEvent): void => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }
};

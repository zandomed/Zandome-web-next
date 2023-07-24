import 'client-only';

import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '@/shared/helpers/storage';

export const useCookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  // Update the cookie consent value in Google Analytics
  const handleGtagConsent = (consent: boolean) => {
    const newValue = consent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });
  };

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  // Update the cookie consent value in necessary places
  useEffect(() => {
    // Update the cookie consent value in Google Analytics
    handleGtagConsent(cookieConsent);

    // Update the cookie consent value in local storage
    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return { cookieConsent, setCookieConsent };
};

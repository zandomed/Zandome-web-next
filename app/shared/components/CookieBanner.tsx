'use client';

import Link from 'next/link';

import { useCookieConsent } from '../hooks/useCookieConsent';

export default function CookieBanner() {
  const { cookieConsent, setCookieConsent } = useCookieConsent();

  // If the user has already consented to cookies, don't show the banner.
  if (cookieConsent != null) return <></>;

  return (
    <div
      className="fixed inset-x-0 bottom-0 mx-auto my-10 flex max-w-max flex-col items-center justify-between 
    gap-4 rounded-lg bg-gray-700 p-3 shadow sm:flex-row md:max-w-screen-sm md:px-4"
    >
      <div className="text-center">
        <p>
          We use <span className="font-bold text-sky-400">cookies</span> on our
          site.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCookieConsent(false)}
          className="rounded-md border-gray-900 px-5 py-2 text-gray-200"
        >
          Decline
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className="rounded-lg bg-gray-900 px-5 py-2 text-white"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}

import React from 'react';

// used for the CMS
// https://www.netlifycms.org/docs/add-to-your-site
export const cmsIdentity = (
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
);

// used for animations
// https://github.com/michalsnik/aos
export const aos = (
  <script src="https://unpkg.com/aos@next/dist/aos.js" />
);

// reCAPTCHA for contact form
export const reCAPTCHA = (
  <script
    src="https://www.google.com/recaptcha/api.js"
    async
    defer
  />
);

// icons
export const fontAwesome = (
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
);

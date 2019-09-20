import React from 'react';
import sources from './sources';

// used for the CMS
// https://www.netlifycms.org/docs/add-to-your-site
export const cmsIdentity = (
  <script src={sources.cmsIdentity} />
);

// used for animations
// https://github.com/michalsnik/aos
export const aos = (
  <script src={sources.aos} />
);

// reCAPTCHA for contact form
export const reCAPTCHA = (
  <script
    src={sources.reCAPTCHA}
    async
    defer
  />
);

// icons
export const fontAwesome = (
  <script
    defer
    src={sources.fontAwesome}
  />
);

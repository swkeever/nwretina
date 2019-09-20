import React from 'react';
import sources from './sources';

// used for the CMS
// https://www.netlifycms.org/docs/add-to-your-site
export const cmsIdentity = (
  <script
    defer
    src={sources.cmsIdentity}
  />
);

// reCAPTCHA for contact form
export const reCAPTCHA = (
  <script
    src={sources.reCAPTCHA}
    async
    defer
  />
);

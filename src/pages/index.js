import React from 'react';
import {
  Content,
  Head,
  Layout,
} from '../components';
import navLinks from '../utils/routes';

export default () => (
  <Layout home>
    <Head title={navLinks.home.name} />
    <Content slugPrefix={navLinks.home.slug} />
  </Layout>
);

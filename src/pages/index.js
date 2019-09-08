import React from 'react';
import slugs from '../utils/slugs';
import {
  Content,
  Head,
  Layout,
} from '../components';

export default () => (
  <Layout location="/">
    <Head title="Home" />
    <Content slugPrefix={slugs.home} />
  </Layout>
);

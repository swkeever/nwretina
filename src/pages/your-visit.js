import React from 'react';
import {
  Layout,
  Head,
  Content,
} from '../components';
import slugs from '../utils/slugs';

const YourVisit = () => (
  <Layout location="/your-visit/">
    <Head title="Your Visit" />
    <Content slugPrefix={slugs.visit} />
  </Layout>
);

export default YourVisit;

import React from 'react';
import {
  Layout,
  Head,
  Content,
} from '../components';
import navLinks from '../utils/routes';

const BillingInsurance = () => (
  <Layout>
    <Head title={navLinks.billing.name} />
    <Content slugPrefix={navLinks.billing.slug} />
  </Layout>
);

export default BillingInsurance;

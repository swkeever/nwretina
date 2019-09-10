import React from 'react';
import {
  Layout,
  Head,
  Content,
} from '../components';
import routes from '../utils/routes';

const BillingInsurance = () => (
  <Layout>
    <Head title={routes.billing.name} />
    <Content slugPrefix={routes.billing.slug} />
  </Layout>
);

export default BillingInsurance;

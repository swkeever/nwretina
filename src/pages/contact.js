import React from 'react';
import {
  Layout,
  Head,
  Hero,
  ContactForm,
  ContactInfo,
  Title,
} from '../components';
import navLinks from '../utils/routes';

const Contact = () => (
  <Layout>
    <Head title={navLinks.contact.name} reCAPTCHA />
    <Hero color="light" id="contact-form">
      <div className="columns is-vcentered">
        <div className="column">
          <div className="content">
            <Title>{navLinks.contact.name}</Title>
            <p>
                Please contact the office
                directly for medical advice
                and emergency appointment needs.
            </p>
          </div>
          <ContactInfo />
        </div>
        <div className="column">
          <ContactForm />
        </div>
      </div>
    </Hero>
  </Layout>
);

export default Contact;

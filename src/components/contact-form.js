import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Input from './input';
import TextArea from './text-area';

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          phone {
            office
          }
        }
      }
    }
  `);

  const emailIsValid = (e) => /\S+@\S+\.\S+/.test(e);
  const nameIsValid = (n) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(n);

  return (
    <form
      method="POST"
      action={`https://formspree.io/${data.site.siteMetadata.email}`}
    >
      <div className="notification is-primary">
        <i className="fas fa-info-circle" />
        {' '}
        Our contact form is currently under construction.
        Please
        {' '}
        <a href={`tel:${data.site.siteMetadata.phone.office}`}>
          call our office
        </a>
        {' '}
        for medical advice and emergency appointment needs.
      </div>
      <Input
        label="Name"
        name="name"
        validation={{
          isValid: nameIsValid,
          success: 'Nice to meet you.',
          error: 'Please enter your full name.',
        }}
        placeholder="Jane Doe"
        type="text"
      />
      <Input
        label="Email"
        name="_replyto"
        validation={{
          isValid: emailIsValid,
          success: 'We will never share your email.',
          error: 'Please enter a valid email.',
        }}
        type="email"
        placeholder="jane.doe@example.com"
      />
      <TextArea
        label="Message"
        name="message"
        placeholder="What brings you in today?"
      />
      {/* <div className="field">
        <div className="control">
          <div
            data-testid="recaptcha"
            className="g-recaptcha"
            data-sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
          />
        </div>
      </div> */}

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            className="button is-primary"
            disabled
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

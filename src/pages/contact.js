import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/hero';
import ContactInfo from '../components/contact-info';

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailIsValid = (e) => /\S+@\S+\.\S+/.test(e);
  const nameIsValid = (n) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(n);

  console.log('KEY\n\n\n\n\n', process.env.RECAPTCHA_SITE_KEY);

  return (
    <Layout location="/contact/">
      <Head title="Contact" reCAPTCHA />
      <Hero color="light" id="contact-form">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="content">
              <h2>Contact Us</h2>
              <p>
        Please contact the office directly for medical advice and emergency appointment needs.
              </p>
            </div>

            <ContactInfo />
          </div>
          <div className="column">
            <form method="POST" action="https://formspree.io/swkeever@gmail.com">

              <div className="field">
                <label htmlFor="name" className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Jane Doe"
                    name="name"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    required
                  />
                </div>
                {
                  nameIsValid(name)
                    ? (
                      <p className="help is-success">
                        {`Nice to meet you, ${name}.`}
                      </p>
                    )
                    : <p className="help is-danger">Please enter your full name.</p>
                }
              </div>

              <div className="field">
                <label className="label" htmlFor="_replyto">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="_replyto"
                    placeholder="jane.doe@example.com"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    required
                  />
                </div>
                {
                  emailIsValid(email)
                    ? <p className="help is-success">We will never share your email.</p>
                    : <p className="help is-danger">Please enter a valid email.</p>
                }
              </div>

              <div className="field">
                <label className="label" htmlFor="message">Message</label>
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="What brings you in today?"
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                  required
                />

              </div>
              {
                // we may want to add Google reCAPTCHA on the site:
              }
              {/* <div className="field">
                <div className="g-recaptcha" data-sitekey={process.env.RECAPTCHA_SITE_KEY} />
              </div> */}

              <div className="field is-grouped">
                <div className="control">
                  <button type="submit" className="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>

        </div>

      </Hero>

    </Layout>
  );
};

Contact.propTypes = {

};

export default Contact;

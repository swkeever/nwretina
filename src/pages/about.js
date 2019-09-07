import React from 'react';
import {
  Layout,
  Head,
  Image,
  Hero,
  ContactButton,
  Header,
} from '../components';
import slugs from '../utils/slugs';
import getContent from '../functions/get-content';

const About = () => {
  //const about1 = getContent(slugs.about.one);

  return null;

  return (
    <Layout location="/about/">
      <Head title="About" />
      <Hero id="about">
        <div className="columns is-vcentered">
          <Header content={about1.header} />
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: about1.html }}
            />
          </div>
          <div className="column">
            <Image src={about1.image.src} alt={about1.image.alt} />
          </div>
        </div>
        <ContactButton />
      </Hero>
    </Layout>
  );
};

export default About;

// / <reference types="Cypress" />
import routes, { notFound } from '../../src/utils/routes';
import { nextSectionText } from '../../src/utils/constants';

const forGatsbyToRender = 500;

describe('Accessibility checks', () => {
  const getTestName = (page) => `Has no detectable a11y violations on ${page} page`;

  const checkA11y = (href) => {
    cy.visit(href);
    cy.injectAxe();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(forGatsbyToRender);
    cy.checkA11y();
  };

  it(getTestName(routes.home.name), () => {
    checkA11y(routes.home.href);
  });

  it(getTestName(routes.about.name), () => {
    checkA11y(routes.about.href);
  });

  it(getTestName(routes.visit.name), () => {
    checkA11y(routes.visit.href);
  });

  it(getTestName(routes.billing.name), () => {
    checkA11y(routes.billing.href);
  });

  it(getTestName(routes.location.name), () => {
    cy.configureAxe({
      rules: [
        
      ]
    })
    checkA11y(routes.location.href);
  });

  it(getTestName(routes.contact.name), () => {
    checkA11y(routes.contact.href);

    // check success text
    cy.get('#name')
      .type('Sean Keever')
      .checkA11y();
  });

  it(getTestName(notFound.name), () => {
    checkA11y(notFound.href);
  });
});

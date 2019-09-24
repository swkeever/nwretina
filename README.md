# NW Retina

[nwretina.com](https://www.nwretina.com)

## Setup

This project uses [Gatsby.js](https://www.gatsbyjs.org/).

### Environment Variables

You will need to create `.env.development` and `.env.production` files to declare environment variables. These files are ignored by Git.

You will need to set the following environment variables:

* `GATSBY_RECAPTCHA_SITE_KEY`
* `GATSBY_RECAPTCHA_SECRET_KEY`

This is for reCAPTCHA in the contact form, *which at the moment is a work in progress*. Check [Google's documentation](https://www.google.com/recaptcha/intro/v3.html) for setting up an API key. See [reCAPTCHA](#recaptcha) for more information setting this up. 

### Starting development

Once you've set up everything in the previous steps, you are ready to install dependencies by running `yarn`, then run a local server using `yarn dev`.

## Testing

Tests are saved as `*.test.js` files and are placed near their tested components in a `__tests__/` directory.
End-to-end tests are placed at the root in `cypress/`.

### Unit testing

The libraries used for unit testing are [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

### End-to-end testing

End-to-end testing is done with [Cypress](https://www.cypress.io/). Accessibility is checked using [cypress-axe](https://www.npmjs.com/package/cypress-axe).

### Useful commands for testing

- `yarn test`: Runs tests once
- `yarn test:watch`: Runs tests in watch mode
- `yarn test:e2e`: Runs end-to-end tests
- `yarn test:coverage`: Displays unit/integration test coverage.


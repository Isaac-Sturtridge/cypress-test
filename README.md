# cypress-test

To run these tests, use `npx cypress open` in the repo and access E2E testing using Google Chrome. This assumes you have Node.js installed and Cypress version 13.6.5 also installed.

The brief for these tests was given as testing the login functionality, I have done this and tested some other parts of the page. This includes tests for logging in as a standard user, testing that an error is shown correctly when wrong details are input, and testing that logging in with some of the other given users works as these users show different behaviours. Locked_out_user receives an error when logging in and is tested for this and problem_user logs in correctly but sees different images on the products.
After this I tested cypress functionality a little further by logging in, adding an item to the cart and heading to the checkout.
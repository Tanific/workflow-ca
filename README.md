# Workflow Course Assignment
## Workflow Status Badges
[![Automated E2E Testing](https://github.com/Tanific/workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Tanific/workflow-ca/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/Tanific/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Tanific/workflow-ca/actions/workflows/unit-test.yml)
[![Code Review](https://github.com/Tanific/workflow-ca/actions/workflows/gpt.yml/badge.svg)](https://github.com/Tanific/workflow-ca/actions/workflows/gpt.yml)
[![Deploy static content to Pages](https://github.com/Tanific/workflow-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/Tanific/workflow-ca/actions/workflows/pages.yml)

## Project requirements
1. Project is configured to run Prettier on commit
2. Project is configured to run ESLint on commit
3. Project default branch is protected, code is versioned and branching conventions have been followed.
4. Project is configured to build and deploy to pages on merge to default branch
5. Project readme file is updated to include new configuration information and workflow status badges
6. Deployed project has been checked for 404 errors
7. Any bugs found have been communicated in the Issues tab
8. The login function fetches and stores a token in browser storage
9. The logout function clears the token from browser storage
10. The user can log in and access their profile
11. The user cannot submit the login form with invalid credentials and is shown a message
12. The user can log out with the logout button

## Get started
- Clone repository and install all packages `npm i`
- Any open live servers must be closed
- Run `npm start` to initiate sass & live server. This will open live server on correct port. E2E tests are configured to run on port 8080

## Running tests

To run all tests, type `npm test`

**Unit Testing**
- Type `npm run test-unit`
- This command initiates jest and runs the required unit tests:
  1. The login function fetches and stores a token in browser storage
  2. The logout function clears the token from browser storage
  
  ![bilde](https://github.com/Tanific/workflow-ca/assets/79892491/3a60c522-6bc2-4360-b6f8-00f3649d5b69)

 
**E2E Testing**
- Type `npm run test-e2e`
- This command will initiate cypress, where the following tests are located:
  1. The user can log in and access their profile
  2. The user cannot submit the login form with invalid credentials and is shown a message
  3. The user can log out with the logout button
 
  ![bilde](https://github.com/Tanific/workflow-ca/assets/79892491/fece9aab-b08b-4b0a-b293-129aca6d6510)



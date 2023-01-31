# Gist Search 📘

**_Gist Search which enables users to search public gists._**

## General Information

- Github search which helps users to search public gist.

## Features


- Searching implemented for public gist.
- Built with React js.
- Uses styled-components for styling
- Uses React-query for query manipulation.
- unit test
- using octokit/rest fro gist apis.
- using react-icons for icons
- using react-spinners-kit to show loading

## Live Demo

🔗 Github Search Public Gist Demo](https://search-gistapi.netlify.app/)

## Setup

Following instructions will get you a copy of the project up and running on your local machine for development purpose.

1. Install following on your local machine
   - [Git](https://git-scm.com)
   - [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
2. Clone the repository by running this following command
   ```bash
   git clone https://github.com/MTahaqr/gistapi
   ```
3. Start project by running following commands

   ```bash
   cd gistapi/
   yarn install

   # once node_modules gets install, run next command
   yarn dev
   ```

4. Once your app is running, you can access it on the following address in your browser
   [http://localhost:3000](http://localhost:3000)

5. To run unit test
   ```bash
   yarn test
   ```

## Versions

Following versions are being used while creating this guide.

```
node@v16.14.2 or higher
npm@8.5.0 or higher
```

## Branches

Current branches and their purposes are as follow.

```
develop -> contains latest changes
main -> reserved for production only
release/1.0.0 -> contains changes which are ready for production
```

# Room For Improvement

## Improvements

- Add integration and E2E test casess.
- Integrate Sentry to track traffic and errors.
- Add SonarQube to analyze code quality and code security.
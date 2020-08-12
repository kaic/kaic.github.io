# kaic.github.io

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

The source code is on `dev` branch.

To run the project:

First install the dependencies:

`npm install`

Then run:

`npm run dev`


To deploy in production (with your github account)

First create a `.env` file with:

`
GH_TOKEN={Your Github Access Token}`

`
GH_REPOSITORY={Your github page repository without https://}
`

Then run:

`npm run production`

This will build the project, send the build code to `master` branch and push the code to production!
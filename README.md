PKStart Local API
=================

Running the Local API
---------------------

### Common code in the `pks-common` repository
Types, interfaces and utils common to all PKStart applications are stored in the `pks-common` [repository](https://github.com/PKStart/pks-common). The code is added to each app's repo as an NPM package directly from Github by the following command:
```shell
npm install git+https://github.com/PKStart/pks-common.git
```
Make sure to reinstall and update this package whenever the common code changes. Use the `npm run update:common` command for this.

### Environment variables
Before starting the API, make sure there is a `.env` file in the root directory with all the environment variables listed in the `.env.example` file.

### DEV Server
To start the API in development mode simply run the `npm run start:dev` script, and it will be served at [http://localhost:8400](http://localhost:8400).

### API documentation
* Swagger UI documentation is available at [http://localhost:8400/api](http://localhost:8100/api)
* OpenAPI JSON can be downloaded from the [http://localhost:8400/api-json](http://localhost:8100/api-json) URL, which can be imported to Insomnia or Postman for testing.


CI pipelines and testing
------------------------

### Github actions
Github action workflows are set up for code quality checks and build. These pipelines are triggered on each push and pull request for the `develop` and `master` branches, and also can be started manually on Github on any branch.

* `code-check-build.yml`: This workflow is responsible for linting, format check and to make sure that builds are passing for each component.

Testing locally
---------------

### Code quality checks
Husky is set up to run the linter and check code formatting before each commit.
These checks however can also be run using the `npm run lint` and `npm run format:check` commands for the entire repository.

### API e2e / integration tests
TBA

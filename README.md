#best-degree

[![Build Status](https://travis-ci.org/Jermorin/best-degree.svg?branch=master)](https://travis-ci.org/Jermorin/best-degree)
[![Code Climate](https://codeclimate.com/github/Jermorin/best-degree/badges/gpa.svg)](https://codeclimate.com/github/Jermorin/best-degree)
[![codecov.io](https://codecov.io/github/Jermorin/best-degree/coverage.svg?branch=develop)](https://codecov.io/github/Jermorin/best-degree?branch=develop)
[![Test Coverage](https://codeclimate.com/github/Jermorin/best-degree/badges/coverage.svg)](https://codeclimate.com/github/Jermorin/best-degree/coverage)
[![bitHound Overall Score](https://www.bithound.io/github/Jermorin/best-degree/badges/score.svg)](https://www.bithound.io/github/Jermorin/best-degree)
[![bitHound Dependencies](https://www.bithound.io/github/Jermorin/best-degree/badges/dependencies.svg)](https://www.bithound.io/github/Jermorin/best-degree/develop/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/Jermorin/best-degree/badges/devDependencies.svg)](https://www.bithound.io/github/Jermorin/best-degree/develop/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/Jermorin/best-degree/badges/code.svg)](https://www.bithound.io/github/Jermorin/best-degree)

##firt use

- `npm install`
- launch your mongo and elasticSearch db
- edit `environment.json` with your own settings
- import seed data with `npm run import`

##use

###launch
- `npm run start`
- GET `/api/health-check`

###test

- `npm run test-dev`
- `npm run coverage-dev`

##stack

- node with es6 syntax
- mongodb
- elasticSearch

##packages

###dev

- [nodemon](http://nodemon.io/)
- [babel](https://www.npmjs.com/package/babel)
- [mocha](http://mochajs.org/)
- [chai](http://chaijs.com/)

###production

- [mongoose](http://mongoosejs.com/)
- [mongoosastic](https://www.npmjs.com/package/mongoosastic)
- [express](https://www.npmjs.com/package/express)
- [morgan](https://www.npmjs.com/package/morgan)
- [winston](https://www.npmjs.com/package/winston)

##process

- [git-flow](https://github.com/nvie/gitflow)

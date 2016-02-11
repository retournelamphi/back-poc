#back-poc

[![Build Status](https://travis-ci.org/retournelamphi/back-poc.svg?branch=develop)](https://travis-ci.org/retournelamphi/back-poc)
[![Code Climate](https://codeclimate.com/github/retournelamphi/back-poc/badges/gpa.svg)](https://codeclimate.com/github/retournelamphi/back-poc)
[![Build Status](https://travis-ci.org/retournelamphi/back-poc.svg?branch=develop)](https://travis-ci.org/retournelamphi/back-poc)
[![bitHound Overall Score](https://www.bithound.io/github/retournelamphi/back-poc/badges/score.svg)](https://www.bithound.io/github/retournelamphi/back-poc)

[![bitHound Dependencies](https://www.bithound.io/github/retournelamphi/back-poc/badges/dependencies.svg)](https://www.bithound.io/github/retournelamphi/back-poc/develop/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/retournelamphi/back-poc/badges/devDependencies.svg)](https://www.bithound.io/github/retournelamphi/back-poc/develop/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/retournelamphi/back-poc/badges/code.svg)](https://www.bithound.io/github/retournelamphi/back-poc)

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

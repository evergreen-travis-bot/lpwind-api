# lpwind-api

![Last version](https://img.shields.io/github/tag/Kikobeats/lpwind-api.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/lpwind-api/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/lpwind-api)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/lpwind-api.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/lpwind-api)
[![Dependency status](http://img.shields.io/david/Kikobeats/lpwind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/lpwind-api)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/lpwind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/lpwind-api#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/lpwind-api.svg?style=flat-square)](https://www.npmjs.org/package/lpwind-api)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Programatic API access for lpwind.com

## Install

```bash
$ npm install lpwind-api --save
```

## Usage

```js
const lpwind = require('lpwind-api')

const stream = lpwind({
  key: process.env.API_KEY, // API Key credentials
  pages: 3, // Numbers or request per each method call [default=Infinity]
})
```

## License

MIT © [Kiko Beats](http://kikobeats.com)

<h1 align="center">
  <br>
  
![mj-cal component Logo](https://raw.githubusercontent.com/majidzeno/mj-cal/master/logo.png)

  <br>
</h1>

# mj-cal

> mj-cal is a react component showing events in calendar cells.

[![NPM](https://img.shields.io/npm/v/mj-cal.svg)](https://www.npmjs.com/package/mj-cal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mj-cal
```

## Usage

```jsx
import React, { Component } from 'react'

import mj-cal from 'mj-cal'

const events = {
  "4ZVboMpvWCRveLNmwuhW": {
    createdAt: 1569184941933,
    days: 4,
    id: 1569184941933,
    requestAvailability: true,
    start: "2019-12-10",
    end: "2019-12-15",
    title: "holiday"
  },
  myn59AMUaIX5IneyNXiH: {
    createdAt: 1568895819334,
    days: 7,
    end: "2019-09-26",
    id: 1568895819334,
    requestAvailability: true,
    start: "2019-09-19",
    title: "holiday"
  }
};
const App = () => <mj-cal events={events} />;
// If you don't have events just omit it
const App = () => <mj-cal  />;
```

## License

MIT © [majidzeno](https://github.com/majidzeno)

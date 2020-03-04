# react-neo4j-hooks

> Basic React hooks for neo4j-javascript-driver

[![NPM](https://img.shields.io/npm/v/react-neo4j-hooks.svg)](https://www.npmjs.com/package/react-neo4j-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-neo4j-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'react-neo4j-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [theprivileges](https://github.com/theprivileges)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

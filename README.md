# tern-requirejs-extension

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-requirejs-extension.png)](http://travis-ci.org/angelozerr/tern-requirejs-extension)
[![NPM version](https://img.shields.io/npm/v/tern-requirejs-extension.svg)](https://www.npmjs.org/package/tern-requirejs-extension)

[tern-requirejs-extension](https://github.com/angelozerr/tern-requirejs-extension) is a plugin which adds support validation for requirejs require  to the JavaSript code intelligence system [Tern](http://ternjs.net/).

Here a sample with Eclipse : 

![requirejs lint](https://github.com/angelozerr/tern.java/wiki/images/EclipseIDE_RequirejsJSLintOnRequireModule.png)

See [here](https://github.com/angelozerr/tern.java/wiki/Tern-&-RequireJS-support) for more information about requirejs lint with Eclipse.

## Installation

tern-requirejs-extension works with the RequireJS [Tern Server][tern-server], and within a browser.

The easiest way to install tern-requirejs-extension is to use a recent version of
[npm][npm]. In the directory where you installed the [tern package][tern-npm],
simply run

```
$ npm install tern-requirejs-extension
```

## Configuration

`requirejs-extension` tern plugin extends `requirejs` tern plugin to support validation.

### With Node.js

In order for Tern to load the tern-requirejs-extension plugin once it is installed, you must
include `requirejs-extension` in the `plugins` section of your [Tern configuration
file][tern-config] and `requirejs`.

Here is a minimal example `.tern-project` configuration file:

```json
{
  "plugins": {
    "requirejs": {},
    "lint": {},
    "requirejs-extension": {}
  }
}
```

### With WebBrowser (CodeMirror)


## Structure

The basic structure of the project is given in the following way:

* `requirejs-extension.js` the tern plugin.
* `demos/` demos with requirejs lint tern plugin which use CodeMirror.
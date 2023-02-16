# @chialab/prettier-config

Chialab's rules for [Prettier](https://prettier.io/).

## Usage

Install Prettier:

```sh
$ npm i -D prettier
```

Install `@chialab/prettier-config`:

```sh
$ npm i -D @chialab/prettier-config
```

Create a `prettier.config.cjs` file and add the configuration:

**prettier.config.cjs**
```js
module.exports = {
    ...require('@chialab/prettier-config'),
};
```

## IDE

Install the Prettier extension for your IDE (optional):

* [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

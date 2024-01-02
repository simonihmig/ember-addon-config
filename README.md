# ember-addon-config

Provide app users with an easy and opinionated way to configure (v2) addons.

## Compatibility

- Ember.js v4.8 or above
- Embroider or ember-auto-import v2

## Usage

### For app users

If you have addons that make use of `ember-addon-config`, then create an `config/addons.js` file in your app if you have not done so already. For each addon, put the addon's package name as the key to the exported object and the its configuration as expected by the addon as the value:

```js
// config/addons.js
'use strict';

module.exports = {
  'my-fancy-addon': {
    foo: 'bar',
  },
};
```

### For addon authors

If you have a v2 addon that you want to make easily configuravle by your app users, then add `@embroider/macros` _and_ `ember-addon-config` as dependencies of your addon.

If your users have configured your addon in their app's `config/addons.js` configuration file as explained above, you can retrieve that configuration in your addon code using `getOwnConfig()` imported from `@embroider/macros` (in JS/TS) or `{{macroGetOwnConfig}}` (in templates).

Given the macro capabilities, this also allows you introduce build-time conditionals, like only importing a library when a config option has been given. See the [macros documentation](https://github.com/embroider-build/embroider/blob/main/packages/macros/README.md#getownconfig-getconfig-and-getglobalconfig) for more information.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

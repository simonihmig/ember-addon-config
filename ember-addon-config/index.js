'use strict';

const { join } = require('path');
const { MacrosConfig } = require('@embroider/macros/src/node.js');

function getMacrosConfig(appInstance) {
  let appRoot = join(appInstance.project.configPath(), '..', '..');
  return MacrosConfig.for(appInstance, appRoot);
}

module.exports = {
  name: require('./package').name,

  addonconfig: null,

  included(parent) {
    if (!this.addonconfig) {
      this.addonconfig = require(join(parent.project.root, 'config/addons'));
    }

    const appInstance = this._findHost();
    const macrosConfig = getMacrosConfig(appInstance);
    const packageName = parent.pkg.name;

    if (this.addonconfig[packageName]) {
      macrosConfig.setConfig(
        parent.root,
        undefined,
        this.addonconfig[packageName],
      );
    }

    this._super.included.apply(this, arguments);
  },
};

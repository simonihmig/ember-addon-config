import { module, test } from 'qunit';
import { getConfig } from '@embroider/macros';
import { addonConfig } from 'test-v2-addon';

// compare this to /test-app/config/addons.js
const expectedConfig = {
  foo: 'bar',
};

module('Unit | addon-config', function () {
  test('getConfig return correct config', function (assert) {
    const config = getConfig('test-v2-addon');

    assert.deepEqual(config, expectedConfig);
  });

  test('v2 addon sees correct config', function (assert) {
    assert.deepEqual(addonConfig, expectedConfig);
  });
});

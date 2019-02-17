cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-console.console",
    "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "console"
    ]
  },
  {
    "id": "cordova-plugin-console.logger",
    "file": "plugins/cordova-plugin-console/www/logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "cordova.logger"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "phonegap-plugin-media-stream.MediaDevices",
    "file": "plugins/phonegap-plugin-media-stream/www/MediaDevices.js",
    "pluginId": "phonegap-plugin-media-stream",
    "clobbers": [
      "navigator.mediaDevices"
    ]
  },
  {
    "id": "phonegap-plugin-media-stream.MediaStream",
    "file": "plugins/phonegap-plugin-media-stream/www/MediaStream.js",
    "pluginId": "phonegap-plugin-media-stream",
    "clobbers": [
      "MediaStream"
    ]
  },
  {
    "id": "phonegap-plugin-image-capture.ImageCapture",
    "file": "plugins/phonegap-plugin-image-capture/www/ImageCapture.js",
    "pluginId": "phonegap-plugin-image-capture",
    "clobbers": [
      "ImageCapture"
    ]
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  },
  {
    "id": "cordova-plugin-ble.BLE",
    "file": "plugins/cordova-plugin-ble/ble.js",
    "pluginId": "cordova-plugin-ble",
    "clobbers": [
      "evothings.ble"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-compat": "1.2.0",
  "cordova-plugin-console": "1.0.7",
  "cordova-plugin-dialogs": "1.2.1",
  "cordova-plugin-statusbar": "2.1.3",
  "cordova-plugin-whitelist": "1.2.2",
  "es6-promise-plugin": "4.2.2",
  "phonegap-plugin-media-stream": "1.2.1",
  "phonegap-plugin-image-capture": "1.1.2",
  "phonegap-plugin-push": "1.8.4",
  "cordova-plugin-ble": "2.0.1"
};
// BOTTOM OF METADATA
});
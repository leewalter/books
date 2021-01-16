
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
      "port": 3001
    },
    "files": ['site/**/*'],
    "watchEvents": [
      "change"
    ],
    "watch": true,
    "ignore": [],
    "single": false,
    "watchOptions": {
      "ignoreInitial": true
    },
    "server": {
      "baseDir": "site"
    },
    "proxy": false,
    "port": 3000,
    "middleware": false,
    "serveStatic": [],
    "logLevel": "info",
    "logPrefix": "Browsersync",
    "rewriteRules": [],
    "open": "local",
    "browser": "default",
    "notify": false,
    "reloadDelay": 0,
    "reloadDebounce": 500,
    "reloadThrottle": 0,
    "plugins": [],
    "injectChanges": true,
    "startPath": null,
    "minify": true,
    "host": null,
    "localOnly": false,
    "codeSync": true,
    "timestamps": true,
    "injectNotification": false
};

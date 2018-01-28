"use strict";
const watch = require("chokidar").watch;
class ConfigMon {

    constructor (config) {
        if(typeof config === 'string') {
            try {
                this.configPath = config;
                this.config = require(config);
                this.setWatch();
            } catch(e) {
                throw new Error('TrafficCircle could not read config file at path: ' + config);
            }
        } else {
            this.config = config;
            if(this.config.configPath) {
                this.configPath = config.configPath;
                this.setWatch();
            }
        }
    }

    setWatch() {
        if(this.config.noWatch === true) return;
        this.watcher = watch(this.configPath).on('change', path => {
            this.config = require(path);
            if(this.config.noWatch === true) this.watcher.close();
            if(this.configPath && this.config.configPath && this.configPath !== this.config.configPath) {
                // if the config file has specified a new config path to watch,
                // close this watcher and watch the new path instead
                this.configPath = this.config.configPath;
                this.watcher.close();
                this.setWatch();
            }
        });
    }
}
module.exports = ConfigMon;

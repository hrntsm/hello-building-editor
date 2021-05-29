import { defaultConfig } from './defaultConfig';
export class Config {
    constructor(config) {
        this.name = 'building-editor';
        const initialConfig = defaultConfig;
        this.config = initialConfig;
        if (window.localStorage[this.name] === undefined) {
            window.localStorage[this.name] = JSON.stringify(initialConfig);
            this.config = Object.assign(Object.assign({}, initialConfig), config);
        }
        else {
            const localStorageData = JSON.parse(window.localStorage[this.name]);
            this.config = Object.assign(Object.assign(Object.assign({}, initialConfig), localStorageData), config);
        }
    }
    getKey(key) {
        return this.config[key];
    }
    set(config) {
        this.config = Object.assign(Object.assign({}, this.config), config);
        window.localStorage[this.name] = JSON.stringify(this.config);
        if (this.config.debug) {
            const dateTime = /\d\d:\d\d:\d\d/.exec(new Date().toString());
            dateTime && console.log('[' + dateTime[0] + ']', 'Saved config to LocalStorage.');
        }
    }
    clear() {
        window.localStorage.clear();
        delete window.localStorage[this.name];
    }
}

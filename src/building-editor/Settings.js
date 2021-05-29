import { defaultSettings } from './defaultSettings';
try {
    // eslint-disable-next-line no-var
    var { besettings } = require('besettings');
}
catch (e) { }
export class Settings {
    constructor() {
        this.renderer = defaultSettings.renderer;
        this.camera = defaultSettings.camera;
        this.scene = defaultSettings.scene;
        this.gridHelper = defaultSettings.gridHelper;
        this.axesHelper = defaultSettings.axesHelper;
        this.planeHelper = defaultSettings.planeHelper;
        this.initialObjects = defaultSettings.initialObjects;
        this.initialHelpers = defaultSettings.initialHelpers;
        if (besettings) {
            Object.assign(this, besettings);
        }
    }
}

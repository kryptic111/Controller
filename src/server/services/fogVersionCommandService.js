import FogVersionCommandManager from "../managers/fogVersionCommandManager"
import AppUtils from '../utils/appUtils';
import Constants from '../constants.js';

const createVersionCommandByInstanceId = function(props, params, callback) {
    var instanceId = AppUtils.getProperty(params, props.instanceId),
        versionCommand = AppUtils.getProperty(params, props.versionCommand),
        newCommand = {
            versionCommand: versionCommand,
            iofog_uuid: instanceId
        };

    FogVersionCommandManager
        .createVersionCommand(newCommand)
        .then(AppUtils.onCreate.bind(null, params, props.setProperty, 'Unable to create Version Command', callback));
};

const deleteVersionCommandByInstanceId = function(props, params, callback) {
    var instanceId = AppUtils.getProperty(params, props.instanceId);

    FogVersionCommandManager
        .deleteByInstanceId(instanceId)
        .then(AppUtils.onDeleteOptional.bind(null, params, callback));
};

const getVersionCommandByInstanceId = function (props, params, callback) {
    var instanceId = AppUtils.getProperty(params, props.instanceId);

    FogVersionCommandManager
        .findByInstanceId(instanceId)
        .then(AppUtils.onFind.bind(null, params, props.setProperty, 'Error: Unable to find version command with this fog', callback));

};

export default {
    createVersionCommandByInstanceId: createVersionCommandByInstanceId,
    deleteVersionCommandByInstanceId: deleteVersionCommandByInstanceId,
    getVersionCommandByInstanceId: getVersionCommandByInstanceId
};
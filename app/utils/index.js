// This is like, um, the index for utils.
// They can be imported into a module like so:
//  > import {isWebPack, saveLocal, loadLocal} from '../../utils';
// Or of course can be imported one by one normally, like:
//  > import saveLocal from '../../utils/saveLocal';

export default {
    isOnClient: require('./isOnClient.js'),
    isOnServer: require('./isOnServer.js'),
    isProd: require('./isProd.js'),
    isWebPack: require('./isWebPack.js'),
    loadLocal: require('./loadLocal.js'),
    saveLocal: require('./saveLocal.js'),
    xhr: require('./xhr.js')
};

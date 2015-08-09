// This is like, um, the index for utils.
// They can be imported into a module like so:
//  > import {isWebPack, saveLocal, loadLocal} from '../../utils';
// Or of course can be imported one by one normally, like:
//  > import saveLocal from '../../utils/saveLocal';

export default {
    contain: require('./lib/contain.js'),
    isOnClient: require('./lib/isOnClient.js'),
    isOnServer: require('./lib/isOnServer.js'),
    isProd: require('./lib/isProd.js'),
    isWebPack: require('./lib/isWebPack.js'),
    loadLocal: require('./lib/loadLocal.js'),
    saveLocal: require('./lib/saveLocal.js'),
    xhr: require('./lib/xhr.js')
};

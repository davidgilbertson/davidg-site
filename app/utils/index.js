// This is like, um, the index for utils.
// They can be imported into a module like so:
//  > import {isWebPack, saveLocal, loadLocal} from '../../utils';
// Or of course can be imported one by one normally, like:
//  > import saveLocal from '../../utils/saveLocal';

export const contain = require('./lib/contain.js').contain;
export const isOnClient = require('./lib/isOnClient.js').isOnClient;
export const isOnServer = require('./lib/isOnServer.js').isOnServer;
export const isProd = require('./lib/isProd.js').isProd;
export const isWebPack = require('./lib/isWebPack.js').isWebPack;
export const loadLocal = require('./lib/loadLocal.js').loadLocal;
export const saveLocal = require('./lib/saveLocal.js').saveLocal;
export const xhr = require('./lib/xhr.js').xhr;

import createHistory from 'history/createBrowserHistory';
import isOnClient from './isOnClient';

export default isOnClient ? createHistory() : {};

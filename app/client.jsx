import React from 'react';
import {render} from 'react-dom';

import App from './components/App/App';

render(<App pathname={location.pathname} />, document.getElementById('app'));

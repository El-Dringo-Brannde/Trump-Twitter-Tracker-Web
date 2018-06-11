import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdbreact/dist/css/mdb.css'
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import { store } from "./redux/store";
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';


ReactDOM.render(
   <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>

         <App />
      </MuiPickersUtilsProvider>
   </Provider >, document.getElementById('root'));

registerServiceWorker();

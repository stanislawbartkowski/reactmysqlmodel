import React, {FunctionComponent} from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useConfirm } from 'material-ui-confirm';

import FrontPanel from './reactrestapi/dist/components/panel/FrontPanel'
import * as actions from './reactrestapi/dist/store/getresource/actions'
import * as I from './reactrestapi/dist/js/I'
import * as C from './reactrestapi/dist/js/C'
import Popups from './reactrestapi/dist/components/Popups'
  
const App: React.FC = () => {

  const confirm = useConfirm();

  C.setConfirm(confirm);
  

  const dispatch = useDispatch();

  dispatch(actions.resourceRead(I.RESOURCE.APPDATA))
  dispatch(actions.resourceRead(I.RESOURCE.LEFTMENU))
  dispatch(actions.resourceRead(I.RESOURCE.STRINGS))

  return (
    <BrowserRouter>
      <div className="App">
        <FrontPanel />
      </div>
      <Popups />
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import './App.css';
import { ParameterTable } from './components/ParameterTable';
import { ModalSelectPart } from './components/modal_select';
import { OperationMenu } from './components/OperationMenu';
import { EditPartStage } from './components/EditPartStage';
import { useStore } from './stores/StoreContext';
import { observer } from 'mobx-react';


const App =  observer(() =>{
  const store = useStore()
  var eps
  if(store.utilStore.selectedpart !== "") {
    eps = <EditPartStage></EditPartStage>
  }
  return (
    <div className="App">
      <ParameterTable></ParameterTable>
      <OperationMenu></OperationMenu>
      <ModalSelectPart></ModalSelectPart>
      {eps}
    </div>
  );
})


export default App;

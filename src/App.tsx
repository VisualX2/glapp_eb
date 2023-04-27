import React from 'react';
import './App.css';
import { ParameterTable } from './components/ParameterTable';
import { ModalSelectPart } from './components/modal_select';
import { OperationMenu } from './components/OperationMenu';
import { EditPartStage } from './components/EditPartStage';
import { useStore } from './stores/StoreContext';
import { observer } from 'mobx-react';
import { TableOfOperations } from './components/TableOfOperations';
import { TopPanel } from './components/TabPanel';


const App =  observer(() =>{
  const store = useStore()
  var eps
  var table
  if(store.utilStore.selectedpart !== "") {
    eps = <EditPartStage></EditPartStage>
    table = <TableOfOperations></TableOfOperations>
  }
  return (
    <div className="App">
      <TopPanel></TopPanel>
      <div className='al'>
      <ParameterTable></ParameterTable>
      <OperationMenu></OperationMenu>
      <ModalSelectPart></ModalSelectPart>
      {eps}
      {table}
      </div>
    </div>
  );
})


export default App;

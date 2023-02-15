import React from 'react';
import DynamicDataGrid from '../../Base/Components/Grid/DynamicDataGrid';
import { columnsPatient,getFormItems } from './Model/PatientModel';



function PatientInfo() {
  return (
    <DynamicDataGrid url={'Patient'} columns={columnsPatient} getFormItems={getFormItems}/> 
  );
}

export default PatientInfo;

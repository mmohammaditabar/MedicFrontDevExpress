import React from 'react';
import DynamicDataGrid from '../../Base/Components/Grid/DynamicDataGrid';
import { columnsMedicalService,getFormItems } from './Model/modelMedication';



function MedicationInfo() {
  return (
    <DynamicDataGrid url={'MedicationInfo'} columns={columnsMedication} getFormItems={getFormItems} />
  );
}

export default MedicationInfo;
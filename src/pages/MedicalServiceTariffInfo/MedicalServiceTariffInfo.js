import React from 'react';
import DynamicDataGrid from '../../Base/Components/Grid/DynamicDataGrid';
import { columnsMedicalService,getFormItems } from './Model/modelMedicalServiceTariff';



function MedicalServiceTariffInfo() {
  return (
    <DynamicDataGrid url={'MedicalServiceTariffInfo'} columns={columnsMedicalService} getFormItems={getFormItems} />
  );
}

export default MedicalServiceTariffInfo;
//pff
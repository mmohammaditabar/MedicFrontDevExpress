import React from 'react';
import DynamicDataGrid from '../../Base/Components/Grid/DynamicDataGrid';
import { columnsDr,getFormItems } from './Model/modelDr';



function DrInfo() {
  return (
    <DynamicDataGrid url={'DrInfo'} columns={columnsDr} getFormItems={getFormItems} />
  );
}

export default DrInfo;

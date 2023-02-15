import React from 'react';
import DynamicDataGrid from '../../Base/Components/Grid/DynamicDataGrid';
import { columnsEmployee, getFormItems } from './Model/modelEmployee';



function EmployeeInfo() {
  return (
    <DynamicDataGrid url={'EmployeeInfo'} columns={columnsEmployee} getFormItems={getFormItems}/>
  );
}

export default EmployeeInfo;

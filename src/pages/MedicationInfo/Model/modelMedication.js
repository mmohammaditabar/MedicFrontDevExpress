

export const columnsMedication = [
    { dataField: 'id', dataType: 'string',key:'id',visible:false,disable:true },
    { dataField: 'medicationCode', caption: 'کد ' , dataType: 'number' },
    { dataField: 'name', caption: 'نام' , dataType: 'string'},
    
    { dataField: 'descriptions', caption: 'توضیحات', dataType: 'string' },
    { dataField: 'coveredByInsurance', caption: 'پوشش بیمه', dataType: 'string' }
   
  ]

  export const getFormItems = () => {
    return [
      {
        dataField: 'id',
        visible:false,
      },
      {
        dataField: 'medicationCode',
        caption: 'کد ',
        editorType: 'number'
      },
      {
        dataField: 'name',
        caption: 'نام',
        dataType:'string'
      },
      
      {
        dataField: 'descriptions',
        caption: 'توضیحات',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'coveredByInsurance',
        caption: 'پوشش بیمه',
        editorType: 'dxTextBox'
      }
     
    ];
  };
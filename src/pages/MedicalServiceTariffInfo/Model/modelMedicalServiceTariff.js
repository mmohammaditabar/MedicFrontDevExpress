

export const columnsMedicalService = [
    { dataField: 'id', dataType: 'string',key:'id',visible:false,disable:true },
    { dataField: 'tariffCode', caption: 'کد ' , dataType: 'number' },
    { dataField: 'name', caption: 'نام' , dataType: 'string'},
    { dataField: 'cost',  caption: 'قیمت',dataType: 'number' },
    { dataField: 'descriptions', caption: 'توضیحات', dataType: 'string' },
    { dataField: 'insuranceCoverage', caption: 'پوشش بیمه', dataType: 'string' }
   
  ]

  export const getFormItems = () => {
    return [
      {
        dataField: 'id',
        visible:false,
      },
      {
        dataField: 'tariffCode',
        caption: 'کد ',
        editorType: 'number'
      },
      {
        dataField: 'name',
        caption: 'نام',
        dataType:'string'
      },
      {
        dataField: 'cost',
        caption: 'قیمت',
        editorType: 'number'
      }
      ,
      {
        dataField: 'descriptions',
        caption: 'توضیحات',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'insuranceCoverage',
        caption: 'پوشش بیمه',
        editorType: 'dxTextBox'
      }
     
    ];
  };
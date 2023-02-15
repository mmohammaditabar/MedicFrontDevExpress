export const columnsPatient = [
    { dataField: 'id', dataType: 'string',visible:false }, 
    { dataField: 'fullName', caption: 'نام' , dataType: 'string' },
    { dataField: 'nationalCode', caption: 'کد ملی' , dataType: 'string'},
    { dataField: 'phone',  caption: 'تلفن',dataType: 'string' },
    { dataField: 'address', caption: 'آدرس', dataType: 'string',visible:false },
    { dataField: 'insurance', caption: 'بیمه', dataType: 'string' },
    { dataField: 'supplementaryInsurance', caption: 'نوع بیمه', dataType: 'string' },
    { dataField: 'birthDay', caption: 'تاریخ تولد', dataType: 'datetime' },
    { dataField: 'sex', caption: 'جنسیت', dataType: 'string' },
  ];


  export const getFormItems = () => {
    return [
      {
        dataField: 'id',
        visible:false,
      },
      {
        dataField: 'fullName',
        caption: 'نام',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'nationalCode',
        caption: 'کد ملی',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'phone',
        caption: 'تلفن',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'address',
        caption: 'آدرس',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'insurance',
        caption: 'بیمه',
        editorType: 'dxTextBox'
      },
      
      {
        dataField: 'supplementaryInsurance',
        caption: 'نوع بیمه',
        editorType: 'dxTextBox'
      },
      
      {
        dataField: 'birthDay',
        caption: 'تاریخ تولد',
        dataType: 'string'
      },
      
      {
        dataField: 'sex',
        caption: 'جنسیت',
        editorType: 'dxTextBox'
      }
  
    ];
  };

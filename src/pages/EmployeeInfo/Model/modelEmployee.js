export const columnsEmployee = [
    { dataField: 'id', dataType: 'string',visible:false }, 
    { dataField: 'name', caption: 'نام' , dataType: 'string' },
    { dataField: 'phone', caption: 'تلفن' , dataType: 'string'},
    { dataField: 'address',  caption: 'آدرس',dataType: 'string' },
    { dataField: 'role', caption: 'نقش', dataType: 'string' },
    { dataField: 'specialty', caption: 'تخصص', dataType: 'string' },
  ];

  export const getFormItems = () => {
    return [
      {
        dataField: 'id',
        visible:false,
      },
      {
        dataField: 'name',
        caption: 'نام',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'phone',
        caption: 'تلفن',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'address',
        caption: 'آدرس',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'role',
        caption: 'نقش',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'specialty',
        caption: 'تخصص',
        editorType: 'dxTextBox'
      }
      
    ];
  };
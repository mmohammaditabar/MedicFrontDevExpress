

export const columnsDr = [
    { dataField: 'id', dataType: 'string',key:'id',visible:false,disable:true },
    { dataField: 'fullName', caption: 'نام ' , dataType: 'string' },
    { dataField: 'experience', caption: 'تجربه' , dataType: 'number'},
    { dataField: 'levelOfExpertise',  caption: 'سطح',dataType: 'string' },
    { dataField: 'cv', caption: 'رزونه', dataType: 'string' },
    { dataField: 'medicalSystem', caption: 'نظام پزشکی', dataType: 'string' },
    { dataField: 'image', caption: 'تصویر', dataType: 'string'},
  ]

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
        dataField: 'experience',
        caption: 'تجربه',
        dataType:'number'
      },
      {
        dataField: 'levelOfExpertise',
        caption: 'سطح',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'cv',
        caption: 'رزونه',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'medicalSystem',
        caption: 'نظام پزشکی',
        editorType: 'dxTextBox'
      }
      ,
      {
        dataField: 'image',
        caption: 'تصویر',
        label: {text:'آپلود'},
        // editorOptions: {
        //   uploadMode:"useButtons",
        //   multiple:"false",
        //   accept:"*",
        //   // uploadUrl
        //   // allowedFileExtensions:"['.txt']"
        // },
      }
    ];
  };
import React, { useState, useEffect } from 'react';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup,
  Form,
  Item,
  Editing,
  Popup
} from 'devextreme-react/data-grid';
import FileUploader from 'devextreme-react/file-uploader';
import { fetchData,postData,putData ,deleteData} from '../../../Server/http';

function DynamicDataGrid(props) {

  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(null);
  useEffect(() => {
    fetchData(props.url).then(data => setData(data.data.data));
    // console.log(data)
  }, []);

  
  const handleRowInserting = e => {
    postData(props.url, e.data)
      .then(res => {
        e.data.id = res.data.id;
        //setData([...data, e.data]);
      })
      .catch(() => {
        e.cancel = true;
      });
  };


  const handleRowUpdating = e => {
    putData(`${props.url}/id?`,{...e.oldData,...e.newData},{params:{id:e.oldData.id}})
      .then(() => {
        setData(
          data.map(item => {
            if (item.id === e.key) {
              return { ...item, ...e.newData };
            }
            return item;
          })
        );
      })
      .catch(() => {
        setUpdateData({ ...e.oldData });
      });
  };

  const handleRowRemoving = e => {
    console.log(e)
    deleteData(`${props.url}/id?id=${e.key}`)
      .then(() => {
        setData(data.filter(item => item.id !== e.key));
      })
      .catch(() => {
        e.cancel = true;
      });
  };


  const onEditorPreparing= e => {
    // if (e.dataField === 'id') {
    //   e.editorOptions.visible = false;
    // }
  }


  return (
   <>
    <DataGrid
      onEditorPreparing={onEditorPreparing}
      dataSource={data}
      columns={props.columns}
      keyExpr="id"

      showBorders={true}
      allowColumnResizing={true}
      columnAutoWidth={true}
     
      className={'dx-card wide-card'}
      focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      columnHidingEnabled={true}
      
      onRowInserting={handleRowInserting}
      onRowUpdating={handleRowUpdating}
      onRowRemoving={handleRowRemoving}
    >
      
      <Editing 
        mode="popup"
        allowUpdating={true}
        allowAdding={true}
        allowDeleting={true}
        >
          <Form
                id="id"
                itemType="group" 
                colSpan={2}
                items={props.getFormItems()}
                
              >
              {/* {props.fileUpload? <FileUploader ></FileUploader>: ''} */}
          </Form>
      </Editing>
      
       <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />
    </DataGrid>
    </>
   
  );
}

export default DynamicDataGrid;



      

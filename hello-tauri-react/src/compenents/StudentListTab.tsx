import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef, GridRowSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import StudentInfoInputFormData from './StudentInfoInputFormData';

interface StudentListTabProps {
  data: StudentInfoInputFormData[];
  onDeleteData: (idsToDelete: number[]) => void;
}

const StudentListTab: React.FC<StudentListTabProps> = ({ data, onDeleteData }) => {
    const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);

    const columns: GridColDef[] = [
        { field: 'name', headerName: '名前', width: 150 },
        { field: 'gender', headerName: '性別', width: 100 },
        { 
            field: 'subjects', 
            headerName: '得意科目', 
            width: 200, 
            valueGetter: (params: GridValueGetterParams) => {
              return params.join(', ');
            },
        },
        { field: 'committee', headerName: '委員', width: 100 },
    ];

    const handleDelete = () => {
        onDeleteData(selectionModel as number[]);
    };

    return (
        <Box mt={2}>
          <DataGrid
            rows={data}
            columns={columns}
            checkboxSelection={true}
            disableRowSelectionOnClick={true}
            // memo：onSelectionModelChange={(newSelection) => { だとチェックボックス選択時に反応しなかったため
            //       onRowSelectionModelChange に変更
            onRowSelectionModelChange={(newSelection) => {
                setSelectionModel(newSelection as GridRowSelectionModel);
            }}
          />
          <Box mt={2} textAlign="right">
            <Button variant="contained" color="secondary" onClick={handleDelete}>
              削除
            </Button>
          </Box>
        </Box>
      );
};

export default StudentListTab;

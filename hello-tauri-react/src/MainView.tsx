import React, {useState} from 'react'
import StudentInfoInputFormData from './compenents/StudentInfoInputFormData';
import StudentInfoInputTab from './compenents/StudentInfoInputTab';
import StudentListTab from './compenents/StudentListTab';
import {
    Box,
    Tab,
    Tabs,
  } from '@mui/material';
  
type TabDefine = {
    label: string;
    content: React.ReactNode;
}

const MainView: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);
    const [data, setData] = useState<StudentInfoInputFormData[]>([]);
    
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleAddData = (newData: Omit<StudentInfoInputFormData, 'id'>) => {
        console.log(newData);
        setData([...data, { ...newData, id: data.length + 1 }]);
        console.log(data);
    };
    
    const handleDeleteData = (idsToDelete: number[]) => {
        setData(data.filter((row) => !idsToDelete.includes(row.id)));
    };

    const tabDefineList: TabDefine[] = [
        { label: '入力', content: <StudentInfoInputTab onAddData={handleAddData} />},
        { label: '一覧', content: <StudentListTab data={data} onDeleteData={handleDeleteData} />}
    ];

    return (
        <Box padding={2} width="400px"> 
            <Tabs value={tabValue} onChange={handleTabChange}>
                {
                    tabDefineList.map((tabDefine) => (
                        <Tab label={ tabDefine.label } />
                    ))
                }
            </Tabs>

            { tabDefineList[tabValue].content }
        </Box>
    );
};

export default MainView;
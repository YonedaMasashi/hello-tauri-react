import React, {useState} from 'react'
import StudentInfoInputTab from './compenents/StudentInfoInputTab';
import StudentListTab from './compenents/StudentListTab';
import {
    Box,
    Tab,
    Tabs,
  } from '@mui/material';

const tabViewList: Tab[] = [
    { label: '入力', content: <StudentInfoInputTab />},
    { label: '一覧', content: <StudentListTab />}
];

const MainView: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box padding={2} width="400px"> 
            <Tabs value={tabValue} onChange={handleTabChange}>
                {
                    tabViewList.map((tabView, index) => (
                        <Tab label={ tabView.label } />
                    ))
                }
            </Tabs>

            { tabViewList[tabValue].content }
        </Box>
    );
};

export default MainView;
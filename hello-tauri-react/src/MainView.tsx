import React, {useState} from 'react'
import StudentInfoInputTab from './compenents/StudentInfoInputTab';
import StudentListTab from './compenents/StudentListTab';


type Tab = {
    label: string;
    content: React.ReactNode;
}

const tabViewList: Tab[] = [
    { label: 'Input', content: <StudentInfoInputTab />},
    { label: 'Student List', content: <StudentListTab />}
];

const MainView: React.FC = () => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
    
    const handleTabClick = (index: number) => {
        setActiveTabIndex(index);
    };

    return (
        <div>
            <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                {
                    tabViewList.map((tabView, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            style={{
                                padding: '10px 20px',
                                cursor: 'pointer',
                                borderBottom: activeTabIndex === index ? '2 solid blue' : 'none',
                                backgroundColor: activeTabIndex === index ? '#CCB3DD' : 'transparent',
                                border: 'none',
                                outline: 'none'
                            }}
                        >
                            { tabView.label }
                        </button>
                    ))
                }
            </div>
            <div style={{ padding: '10px' }}>
                { tabViewList[activeTabIndex].content }
            </div>
        </div>
    );
};

export default MainView;
import React, { useState } from 'react';
import { Tab,Tabs,AppBar } from '@mui/material';

const Nav = () => {

    const [value,setValue] = useState(0);
    const handleTab=(e,val)=>{
        console.log(val)
        setValue(val);
    }
  return (
    <div>
        <AppBar color='secondary'>
            <Tabs onChange={handleTab} value={value}>
                <Tab label="Item 1"/>
                <Tab label="Item 2"/>
                <Tab label="Item 3"/>
            </Tabs>
        </AppBar>

        <TabPanel value= {value} index={0}>
            details1
        </TabPanel>
        <TabPanel value= {value} index={1}>
            details2
        </TabPanel>
        <TabPanel value= {value} index={2}>
            details3
        </TabPanel>
    </div>
  )
}

function TabPanel(props){
    const {children, value, index} = props;
    return(
        <div>
            {
                value === index &&(
                    <h1>{children}</h1>
                )
            }
        </div>
    )
}


export default Nav
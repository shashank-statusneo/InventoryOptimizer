import React, { useState } from 'react';
import { Typography, Tabs, Tab, Container } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import OptimizerContainer from './optimizer';


const InventoryOptimizer = () => {

    const [currentTab, setCurrentTab] = useState('optimizer');

    const AppHeader = () => {
        return(
            <Typography 
                variant="h3" 
                component="h3"
                align='center'
                >
                INVENTORY OPTIMIZER
            </Typography>
        );
    }


    const FormData = () => {
    
        switch(currentTab) {
            case 'optimizer': return <OptimizerContainer/>
            default: return <></>
        }

    }

    const AppTabs = () => {
        return (
            <TabContext value={currentTab}>
            <Tabs 
                centered 
                selectionFollowsFocus
                textColor="secondary" 
                indicatorColor="secondary" 
                aria-label='Optimizer Tabs' 
                value={currentTab}
                onChange={ (event, value) => {
                    setCurrentTab(value);
                }}>
                <Tab label="Optimizer" value='optimizer'/>
                <Tab label="Optimizer Result" value='optimizerResult'/>
                <Tab label="Simulator" value='simulator'/>

            </Tabs>
            </TabContext>
        )
    }

    return(
        <>
        <AppHeader/>
        <Container>
            <AppTabs/>
            <FormData/>
        </Container>
        </>
    )
}

export default InventoryOptimizer;
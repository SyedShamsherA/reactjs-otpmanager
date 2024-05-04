import * as React from 'react'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import PropTypes from 'prop-types'
import Dashboard from './Dashboard';
import Document from './Document';
import './css/tab.css'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: 'white' }} className='tabs'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Dashboard" {...a11yProps(0)} />
                    <Tab label="Docs" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <div className='tabOne'>
                <CustomTabPanel value={value} index={0}>
                    <Dashboard />
                </CustomTabPanel>
            </div>
            <div>
                <CustomTabPanel value={value} index={1}>
                    <Document />
                </CustomTabPanel>
            </div>
        </Box>
    );
}
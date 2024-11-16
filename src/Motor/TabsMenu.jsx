import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuestionComponent from './TabsInformation/QuestionCom';
import TabsInfo from './TabsInformation/TabsInfo';
import FAQComponent from './TabsInformation/FAQCom';
import ContactInfo from './TabsInformation/ContactInfo';


export function TabPanel1(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel1.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item reviews" {...a11yProps(0)} sx={{ width: 170, marginLeft: 4 }} />
          <Tab label="Item Q&A" {...a11yProps(1)} sx={{ width: 170 }} />
          <Tab label="Item FAQ" {...a11yProps(2)} sx={{ width: 170 }} />
          <Tab label="Contact" {...a11yProps(3)} sx={{ width: 170 }} />
        </Tabs>
      </AppBar>
      
    
      <TabPanel1 value={value} index={0} dir={theme.direction}>
        <Typography variant="h5"><TabsInfo/></Typography>
      </TabPanel1>
      <TabPanel1 value={value} index={1} dir={theme.direction}>
        <Typography variant="h5"><QuestionComponent/></Typography>
      </TabPanel1>
      <TabPanel1 value={value} index={2} dir={theme.direction}>
        <Typography variant="h5"><FAQComponent/></Typography>
      </TabPanel1>
      <TabPanel1 value={value} index={3} dir={theme.direction}>
        <Typography variant="h5"><ContactInfo/></Typography>
      </TabPanel1>
    </Box>
  );
}
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabsInfo from './TabsInformation/TabsInfo'
import { Typography } from '@mui/material';
import QuestionComponent from './TabsInformation/QuestionCom'
import FAQComponent from './TabsInformation/FAQCom'
import ContactInfo from './TabsInformation/ContactInfo'

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',background: 'rgba(0, 109, 171, 0.20)'  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{marginLeft:'34px'}} label="Item reviews" {...a11yProps(0)} />
          <Tab label="Item Q&A" {...a11yProps(1)} />
          <Tab label="Item FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel  value={value} index={0}>
      <Typography variant="h5"><TabsInfo/></Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Typography variant="h5"><QuestionComponent/></Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Typography variant="h5"><FAQComponent/></Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Typography variant="h5"><ContactInfo/></Typography>
      </CustomTabPanel>
    </Box>
  );
}

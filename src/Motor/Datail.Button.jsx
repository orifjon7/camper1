import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const style = { 
    width: 181.5,
    height: 50.014,

  };
export const DatailButton = () => {
  return (
    <Stack spacing={2} direction="row">
     <Button variant="contained" sx={style}>ADD TO CART</Button>
      <Button variant="outlined" sx={style}>COMPARE</Button>
    </Stack>
  )
}

export default DatailButton
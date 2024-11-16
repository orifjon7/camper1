import React from 'react';
import { Box, Card, CardContent, Typography, Grid, MenuItem, FormControl, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

const cars = [
  {
    id: 254,
    name: 'Car name',
    brand: 'brand',
    description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    date: '22.02.2022',
    viewed: 135,
    imageUrl: 'https://cdn.pixabay.com/photo/2024/01/31/21/28/ai-generated-8544841_640.jpg', 
  },

];

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const CarCard = ({ car }) => (
  <Card variant="outlined" sx={{ display: 'flex', mb: 2 }}>
    <Box component="img" src={car.imageUrl} alt={car.name} sx={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 1 }} />
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="h6">{car.name}</Typography>
      <Typography variant="body2" color="textSecondary">{car.brand}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>{car.description}</Typography>
    </CardContent>
    <Box sx={{ p: 2 }}>
      <Typography variant="body2">ID: {car.id}</Typography>
      <Typography variant="body2">Date: {car.date}</Typography>
      <Typography variant="body2">Viewed: {car.viewed}</Typography>
    </Box>
  </Card>
);

const PremiumReview = () => {
  const [sortOrder, setSortOrder] = React.useState('');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">
          Premium Review <Typography component="span" color="primary">35</Typography>
        </Typography>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <Select
            value={sortOrder}
            onChange={handleSortChange}
            displayEmpty
          >
            <MenuItem value="" disabled>Sort by</MenuItem>
            <MenuItem value="best">Best</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {cars.map((car, index) => (
          <Grid item xs={12} key={index}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PremiumReview;

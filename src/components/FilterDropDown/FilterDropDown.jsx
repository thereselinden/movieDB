import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './filterDropDown.css';

const FilterDropDown = ({ filter, setFilter }) => {
  return (
    <Box sx={{ minWidth: 120, textAlign: { xs: 'center', sm: 'left' } }}>
      <FormControl>
        <InputLabel id="category-label" sx={{ color: 'white' }}>
          Category
        </InputLabel>
        <Select
          sx={{
            color: 'white',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '.MuiSvgIcon-root ': {
              fill: 'white !important',
            },
          }}
          labelId="category-label"
          id="demo-simple-select"
          value={filter}
          label="Category"
          onChange={e => setFilter({ filter: e.target.value })}
        >
          <MenuItem value={'popular'}>Popular</MenuItem>
          <MenuItem value={'top_rated'}>Top Rated</MenuItem>
          <MenuItem value={'upcoming'}>Upcoming</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterDropDown;

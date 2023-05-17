import { useEffect, useState } from 'react';
import './filterDropDown.css';

const FilterDropDown = ({ handleFilterChange }) => {
  const [category, setCategory] = useState('popular');

  useEffect(() => {
    handleFilterChange(category);
  }, [category, handleFilterChange]);

  return (
    <select onChange={e => setCategory(e.target.value)}>
      <option value="popular">Popular</option>
      <option value="top_rated">Top Rated</option>
      <option value="upcoming">Upcoming</option>
    </select>
  );
};

export default FilterDropDown;

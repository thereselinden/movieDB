import { useEffect, useState } from 'react';
import './filterDropDown.css';

const FilterDropDown = ({ filter, setFilter }) => {
  // tidigare props handleFilterChange
  // const [category, setCategory] = useState('popular');

  // useEffect(() => {
  //   handleFilterChange(category);
  // }, [category, handleFilterChange]);

  return (
    // <select value={category} onChange={e => setCategory(e.target.value)}>
    <select
      value={filter}
      onChange={e => setFilter({ filter: e.target.value })}
    >
      <option value="popular">Popular</option>
      <option value="top_rated">Top Rated</option>
      <option value="upcoming">Upcoming</option>
    </select>
  );
};

export default FilterDropDown;

import React,{useState, useEffect} from 'react';
import './App.css';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
export default function DropDown2({data }) {
    const Categorys = data.map(q => q.category);
    const UniqueCategory = Categorys.filter((q, idx) => Categorys.indexOf(q) === idx) ;
    const [select, setSelect] = React.useState('');
    
    const handleChange = (event) => {
        setSelect(event.target.value);
        // console.log(select);
      };
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl >
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={select}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value="chemistry"> chemistry</MenuItem>
        <MenuItem value="physics"> physics</MenuItem>
        <MenuItem value="peace"> peace</MenuItem>
        
      </Select>
    </FormControl>
  </Box>
//    <div>
//     {
//         UniqueCategory.map((categry) => 
//         (
//             <div className='option' onClick={() => {onChange(categry);}}>
//                  {categry} </div>
//         ))
//     }
//    </div>
  )
}

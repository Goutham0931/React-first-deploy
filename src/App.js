import React,{useState, useEffect} from 'react';
import Datatable from './Datatable';
import './App.css';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

require("es6-promise").polyfill();
require("isomorphic-fetch");

 function App() {
    const[data , setData] = useState([]);
    
    const [Query,setQuery]=useState("");
    const Categorys = data.map(q => q.category);
    const Years = data.map(q => q.year);
    const UniqueCategory = Categorys.filter((q, idx) => Categorys.indexOf(q) === idx);
    const UniqueYear = Years.filter((q, idx) => Years.indexOf(q) === idx);
    const [select, setSelect] = React.useState('');
    const [value,setValue] =React.useState('');
    const[searchColumn,setsearchColumn] = useState(["category","year"]);
    const handleChange = (event) => {
      setSelect(event.target.value);
      // console.log(select);
    };
    useEffect(() => 
    {
        fetch('http://api.nobelprize.org/v1/prize.json')
        .then((response) => response.json())
        .then((json) => setData(json.prizes));
        
     }, [])
     console.log(data);
    console.log(select);
    const size= searchCategory(data).length ;
    
    function searchCategory(rows) {
      return rows.filter((row) => 
      searchColumn.some(
        (column) => 
        row[column].indexOf(select)>-1) );
    }
    function search(rows) {
      return rows.filter(row => row.year.indexOf(Query)>-1)
    }
    

    return (
    <div>
      <div>
        <table><tr><th>Bikayi Assignment</th></tr></table>
      </div>
      <div>
        <table><tr><th><Box sx={{ minWidth: 400 }}>
        <FormControl xl>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value=""> All</MenuItem>
            {
              UniqueYear.map((years,i) => (
                <MenuItem key={i} value={years}> {years}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Box></th>
      
      <th> <Box sx={{ minWidth: 400 }}>
        <FormControl xl>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value=""> All</MenuItem>
            {
              UniqueCategory.map((categorys,i) => (
                <MenuItem key={i} value={categorys}> {categorys}</MenuItem>
              ))
            }
        
        
          </Select>
        </FormControl>
      </Box></th>
      <th><h5>No.Of Rows = {size}</h5></th>
      </tr></table>
      </div>
      
     
      
      
      <div></div>
      <div><Datatable data= {searchCategory(data)} />  </div> 
    </div>
  );
}
export default App;

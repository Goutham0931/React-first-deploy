import React,{useState, useEffect} from 'react';
import './App.css';

export default function Dropdown({data , prompt , value, onChange }) {
    const Categorys = data.map(q => q.category);
    const UniqueCategory = Categorys.filter((q, idx) => Categorys.indexOf(q) === idx) ;
    const [open,setOpen] = useState(false);

  return (
    <div className='dropdown'>
        <div className='control' onClick ={() => setOpen(prev => !prev)}>
            <div className='selected-value' >{value? value.name:prompt}</div>
            <div className='arrow' className={`arrow ${open ? "open" : null}`}/>
        </div>
        <div className='options'>
            {
                UniqueCategory.map((categry) => (
                <div className='option' onClick={() => {
                    onChange(categry);setOpen(false);
                }}> {categry} </div>))
            }
        </div>
    </div>
  )
}

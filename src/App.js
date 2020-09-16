import React from 'react';
import './App.css';

import List from './components/List';
import Search from './components/Search';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = e=>{e.preventDefault();setSearchTerm(e.target.value);}
  const products= [
    {
      product_id: "cpu001",
      name : "Intel PIII",
      year: "2005",
      manufacturer: "Intel"
    },
    {
      product_id: "cpu002",
      name: "Intel Pentium D",
      year: "2012",
      manufacturer: "Intel"
    },
    {
      product_id: "cpu003",
      name: "AMD A4-5300",
      year: "2013",
      manufacturer: "AMD"
    },
    {
      product_id: "cpu004",
      name: "i3-7110u",
      year: "2017",
      manufacturer: "Intel"
    },
    {
      product_id: "cpu005",
      name: "R5-3500U",
      year: "2020",
      manufacturer: "AMD"
    }
  ];
  const searchedProducts = products.filter((k)=>{
    
      return k.manufacturer.includes(searchTerm);
  });
  return (
    <div className="App">
      <Search change={handleChange} />
      <List list={searchedProducts} />  
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import 'bulma/css/bulma.min.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [categories] = useState([
      {
          name: "Dairy", 
      },
      {
          name: "Meat",
      },
      {
          name: "Produce",
      },
      {
          name: "Dessert",
      }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  

  return (
    
    <Nav></Nav>

    <main>
        <Sidebar currentCategory={currentCategory}></Sidebar>
    </main>


   
  );
}

export default App;

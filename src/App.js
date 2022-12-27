import React from 'react'
import Clothes from './Clothes'

function App(props) {
  return (
    <div>
      <Clothes name="Quần jean" type="Skinny" color ="Đen" size = "L">Clothes 1</Clothes>
      <Clothes name="Váy" type="váy công chúa" color ="Trắng" size = "M">Clothes 2</Clothes>
    </div>
  );
}

export default App;

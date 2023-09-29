import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import data from "../src/data"
import Nav from './Components/Nav'
import plus from "./assets/images/icon-plus.svg"
import minus from "./assets/images/icon-minus.svg"
import { useState } from 'react';
function App() {
  const [images] = useState(data);
const [value, setValue] = useState(0);
const [count, setCount] = useState(0)
const {image} = images[value]
 const handleDecrement = ()=>{
  if (count > 0){
    setCount(prev => prev - 1)
  }
 }
 const handleIncrement = ()=>{
  if (count <10){
    setCount(prev => prev + 1)
  }
 }
  return (
    <div className="App">
      <div>
      <Nav/>
      </div>
      
      <main className='main'>
        <section>
          <article className='mainimgs'>
           <img src={image} alt='sneakers' className='mainimg'/>
           <ul className='thumbnail'>
           {images.map((item, index) => (
              <li key={item.id} onClick={e=> setValue(index)}>
                <img src={item.thumbnail} alt='sneakers' className='thumbnails'/>
                </li>
                ))}
            </ul>
          </article>
        </section>
        <section className='maintext'>
        <h3 className='subtitle'>Sneaker Company</h3> 
        <h1 className='introtext'>Fall Limited Edition <br/> Sneakers</h1>
        <p className='mainpg'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
           durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <h1 className='price'>$125.00 <span>50%</span></h1>
        <p className='cutprice'>$250.00</p>
        <div className='forcart'>
        <button className='countbtn'>
          <img className='texticon' src={minus} onClick={handleDecrement} />
          <span className='count'>{count}</span>
          <img src={plus} className='texticon' onClick={handleIncrement} />
        </button>
        <button className='addcart'> <FontAwesomeIcon icon={faCartShopping} className='carticon'/>Add to cart </button>
        </div>
        </section>
      </main>
      </div>
    
  );
}

export default App;

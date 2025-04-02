import  {useState} from 'react';


import Greetings from './greetings.jsx'
import Footer from './footer.jsx' 
import Counter from './counter.jsx'

import './App.css'


function App() {
 return (
  <div>
     <Greetings />

     <Footer/>

     <Counter />

     <Moodtracker />
     
  </div>
 )
}

  
export default App

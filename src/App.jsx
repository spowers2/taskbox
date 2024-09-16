import { useState } from 'react'
import './App.css'
import Page from './stories/Page'

function App() {
  const [count, setCount] = useState(0)
  

  return (
<div> <Page />
 </div>
 

    
  );
}

export default App;

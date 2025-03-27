import './App.css';
import Navigation from './navigation';
import Navbar from './components/header';
import { Suspense } from 'react';

function App() {

  console.log('testing node_module file ')
  return (
  <div className="App"    style={{height:'100vh'}}>
      <Navbar/>
       <Suspense fallback={<div>Loading...</div>}>
        <Navigation/>
      </Suspense>    
      </div>
  );
}

export default App;

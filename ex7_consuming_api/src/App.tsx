import { createSignal } from 'solid-js';
import './App.css'
import UserProfile from './components/APIConsuming1'
import ManualFetchComponent from './components/APIConsuming2';
// import AxiosFetchComponent from './components/APIConsuming3';
import AxiosFetchComponent from './components/APIConsuming4';
// import GenericAxiosFetchComponent from './components/APIConsuming6';
import GenericAxiosFetchComponent from './components/APIConsuming7';

function App() {
  const [sample, setSample] = createSignal("1");
  
  return (
    <>
      <input type="text" onchange={(e) => setSample(e.target.value)}/>
      <div>
        {/* <UserProfile userId={sample()}/> */}
        {/* <ManualFetchComponent userId={sample()}/> */}
        <AxiosFetchComponent userId={sample()}/>
        <GenericAxiosFetchComponent/>
      </div>
    </>
  )
}

export default App

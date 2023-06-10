import './App.css';
import BasicUserCard from './components/basicUserCard';
import DetailesUserCard from './components/detailsUserCard'
import Search from './components/search';
import { useRef } from 'react';
import {useContext } from 'react';
import {ContextStyle} from './contextApi/contextApi'
 
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
function App() {
  const {tempState}=useContext(ContextStyle)
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <div ref={myRef} className="App" >
     <Search />
     <BasicUserCard/>
     {tempState ?   <DetailesUserCard/> : null}
     {tempState ?  null    : <div  onClick={executeScroll} className='upGo'>
<img src="/top.png" alt="" />
</div>}
     
    </div>
  );
}

export default App;

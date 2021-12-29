import react,{useState,useEffect} from 'react';

import Loading from './components/Loading/Loading';
import Suggestion from './components/Suggestion/Suggestion';
import './App.css';

const url = 'https://www.boredapi.com/api/activity'

function App() {
  const [Loading,setLoading] = useState(true);
  const [Suggestion,setSuggestion] = useState([]);

  const fetchidea = async ()=>{
    setLoading(true);
    try{
      const res = await fetch(url);
      const Suggestion = await res.json();
      setLoading(false);
      setSuggestion(Suggestion);
    }catch(error){
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
          
      </header>   
    </div>
  );
}

export default App;

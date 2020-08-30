import React, {useEffect} from 'react';
import MyPlayer from './components/MyPlayer';

function App() {

  useEffect(() => {
    document.title = "Edward's Scratch ShowCases"
  });

  return (
    <div className="App" style={{width: "100%", height: "100%", margin: 0, padding: 0}}>
     <MyPlayer />
    </div>
  );
}

export default App;

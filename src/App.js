import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
   const [recentData, setRecentData] = useState([]);

  const handleRecentData = (data) => {
    setRecentData(data);
  };

  return (
    <div className="App">
      <Sidebar recentData={recentData}></Sidebar>
      <Main onRecentData={handleRecentData}></Main>
    </div>
  );
}

export default App;

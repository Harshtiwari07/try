
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import EbookFilter from './EbookFilter';

function App() {
  return (
   <>
   <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <EbookFilter /> {/* Add the EbookFilter component here */}
        </main>
      </div>
    </div>
     </>

);
}

export default App;

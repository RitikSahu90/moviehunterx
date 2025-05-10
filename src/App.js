import logo from './logo.svg';
import './App.css';
import {Home} from './pages/home';
import ErrorPage from './pages/errorpage';
import { MovieDetails as MD } from './pages/movie_details';
import {Routes,Route} from 'react-router-dom';
import { MovieBlank as MB } from './pages/movie_blank';
import { useGlobalContext } from './API/contex';

function App() {
  const {query,setQuery}=useGlobalContext()
  return (
    <>
        <div className="search-section">
        {'MOVIEHUNTERX     '.toUpperCase()}
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/movie' element={<MD/>}/>
      <Route path='/movie/:id' element={<MB/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  );
}

export default App;

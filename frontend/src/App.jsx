import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {Home} from './screens/Home';
import {ResultPage} from './screens/ResultPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

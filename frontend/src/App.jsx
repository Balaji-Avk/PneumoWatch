import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/upload" element={<Home />} />
          <Route path="/predict" element={<Result />} />
        </Routes>
      </BrowserRouter>
      <ImgForm />
    </>
  )
}

export default App

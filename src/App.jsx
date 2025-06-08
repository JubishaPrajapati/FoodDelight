import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/error';
import Success from './pages/success';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Error />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
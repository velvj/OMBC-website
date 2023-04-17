// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';


import Header from './components/header/Header';
import Footer from'./components/footer/Footer';
import Product from './components/products/Product';
import Story from './components/story/Story';
import Faq from './components/faq/Faq';
import Contact from './components/contact/Contact';
import Home from './components/Home/homePage';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>}/>
      <Route path="/header" element={<Header />} />
      <Route path='/Story' element={<Story />}></Route>
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/product" element={<Product />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
</>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderLayout from './Components/Layout/HeaderLayout';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import AboutLayout from './Components/Layout/AboutLayout';
import Skills from './Components/About/Skills/Skills';
import Education from './Components/About/Education/Education';
import Experiece from './Components/About/Experience/Experiece';
import Loader from './Components/Loader/Loader';
import { useNavBarContext } from './context/NavBarProvider';
import FirebaseProvider from './context/FirebaseProvider';
import ProjectForm from './Components/ProjectForm';

function App() {
  const { isLoading } = useNavBarContext()
  if (isLoading) {
    return (<Loader></Loader>)
  } else {
    return (
      <BrowserRouter>
        <FirebaseProvider>
          <Routes>
            <Route>
              <Route path='/' element={<HeaderLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutLayout />}>
                  <Route path='/about' element={<Skills />} />
                  <Route path='/about/education' element={<Education />} />
                  <Route path='/about/experiece' element={<Experiece />} />
                  <Route />
                </Route>
                <Route path='/service' element={<Service />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/ProjectForm' element={< ProjectForm />} />
              </Route>
            </Route>
          </Routes>
        </FirebaseProvider>
      </BrowserRouter>
    );
  }


}

export default App;

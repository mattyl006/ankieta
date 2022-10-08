import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import NextPage from "./pages/NextPage";
import StartPage from "./pages/StartPage";
import PatientsList from './pages/PatientsList';
// import NavBar from "./components/elements/NavBar";

const App = () => {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <NavBar /> */}
          <Routes>
            <Route path='/next-page' element={<NextPage/>}/>
            <Route exact path='/' element={<StartPage/>}/>
            <Route path="/patients-list" element={<PatientsList/>} />
            <Route path="/patients-list" element={<PatientsList/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
};

export default App;

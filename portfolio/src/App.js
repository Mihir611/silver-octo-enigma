import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from './globalStyles'
import Home from './components/home/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';

function App() {
  // return (
  //   <div className='App'>
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home/>}></Route>
  //       </Routes>
  //     </Router>
  //   </div>
  // );
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      app file
    </ThemeProvider>
  </>
}

export default App;

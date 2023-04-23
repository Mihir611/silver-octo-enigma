import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import GlobalStyle from './globalStyles'
// import Main from './components/Main';
import Main from './components/Main';
import About from './components/AboutPage';
import Blog from './components/BlogPage';
import Work from './components/WorkPage';
import Skills from './components/MySkillsPage';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/Themes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/skills" element={<Skills />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;

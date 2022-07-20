import './App.css';
import LandingPage from './components/landingPage';
import PostsPage from './components/postsPage';
import CreateNewPost from './components/createNewPost';
import FormTest from './components/formTest';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/newPost' element={<CreateNewPost />} />
          <Route path='/testnewpost' element={<FormTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

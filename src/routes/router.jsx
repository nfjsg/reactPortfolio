import { createBrowserRouter } from 'react-router-dom';
import AboutMe from '../components/aboutMe/aboutMe';
import Home from '../components/home/home';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import Resume from '../components/resume/resume';
import Layout from '../components/layout'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about-me",
    element: <Layout><AboutMe /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><Projects /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/resume",
    element: <Layout><Resume /></Layout>,
  },
]);

export default router;


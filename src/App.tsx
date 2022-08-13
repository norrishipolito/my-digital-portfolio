import './App.css';
import NavBar from './Components/Layout/NavBar/NavBar';
import { ChakraProvider, Box, Spacer } from '@chakra-ui/react'
import Footer from './Components/Layout/Footer/Footer';
import LandingPage from './Components/Layout/Content/LandingPage';
import DepartmentAssignment from './Components/Layout/Content/DepartmentAssignment';
import WeeklyActivities from './Components/Layout/Content/WeeklyActivities';
import Company from './Components/Layout/Content/Company';
import CompanyProfile from './Components/Layout/Content/CompanyProfile';
import Experience from './Components/Layout/Content/Experience';
import Comments from './Components/Layout/Content/Comments';
import OJTHours from './Components/Layout/Content/OJTHours';
import Appendix from './Components/Layout/Content/Appendix';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <Box bgGradient={'linear(to-tr, #406882 60%, transparent)'} pb={'5rem'}>
          {/* <AppRoutes/> */}
          <LandingPage/>
          <Company/>
          <CompanyProfile/>
          <DepartmentAssignment/>
          <WeeklyActivities/>
          <Experience/>
          <Comments/>
          <OJTHours/>
          <Appendix/>
        </Box>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;

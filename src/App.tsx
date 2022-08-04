import './App.css';
import NavBar from './Components/Layout/NavBar/NavBar';
import { ChakraProvider, Box, Spacer } from '@chakra-ui/react'
import Footer from './Components/Layout/Footer/Footer';
import LandingPage from './Components/Layout/Content/LandingPage';
import DepartmentAssignment from './Components/Layout/Content/DepartmentAssignment';
import WeeklyActivities from './Components/Layout/Content/WeeklyActivities';
import Company from './Components/Layout/Content/Company';
import CompanyProfile from './Components/Layout/Content/CompanyProfile';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <Box bg="#406882">
          <LandingPage />
          <Company/>
          <CompanyProfile/>
          <DepartmentAssignment/>
          <WeeklyActivities/>
        </Box>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import LandingPage from '../Components/Layout/Content/LandingPage';
import DepartmentAssignment from '../Components/Layout/Content/DepartmentAssignment';
import WeeklyActivities from '../Components/Layout/Content/WeeklyActivities';
import Company from '../Components/Layout/Content/Company';
import CompanyProfile from '../Components/Layout/Content/CompanyProfile';
import Experience from '../Components/Layout/Content/Experience';
import Comments from '../Components/Layout/Content/Comments';
import OJTHours from '../Components/Layout/Content/OJTHours';
import Appendix from '../Components/Layout/Content/Appendix';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Company' element={<Company />} />
        <Route path='/CompanyProfile' element={<CompanyProfile />} />
        <Route path='/DepartmentAssignment' element={<DepartmentAssignment />} />
        <Route path='/WeeklyActivities' element={<WeeklyActivities />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/Comments' element={<Comments />} />
        <Route path='/OJTHours ' element={<OJTHours />} />
        <Route path='/Appendix' element={<Appendix />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;

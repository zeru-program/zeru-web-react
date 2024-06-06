import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/landing-page/Home'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import SourceCode from './pages/sc/SourceCode'
import SourceCodeDesc from './pages/sc/SourceCodeDesc'
import E404 from './pages/error/E404'

function RouterApp() {
    console.log("zeru website. created by Justine, © 2023-2024 all rights reserved.");
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/source-code" element={<SourceCode />} />
        <Route path="/source-code/:id" element={<SourceCodeDesc />} />
        <Route path="*" element={<E404 />} />
      </Routes>
     </Router>
    )
}

export default RouterApp

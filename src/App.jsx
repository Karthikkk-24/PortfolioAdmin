import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PublicRoute from './components/PublicRoute';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Register from './pages/Register';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;

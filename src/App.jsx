import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PublicRoute from './components/PublicRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;

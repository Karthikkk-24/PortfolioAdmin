import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PublicRoute = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

    useEffect(() => {
        checkLogin();
    }, []);

    function checkLogin() {
        if (localStorage.getItem('token')) {
            // window.location.href = '/dashboard';
        } else {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/login';
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-start justify-start">
                <div
                    className={`h-full transition-all duration-300 ease-in-out ${
                        isSidebarOpen
                            ? isSidebarCollapsed
                                ? 'w-20'
                                : 'w-96'
                            : 'ml-0'
                    }`}
                >
                    <Sidebar
                        isOpen={isSidebarOpen}
                        isCollapsed={isSidebarCollapsed}
                        toggleCollapse={toggleCollapse}
                    />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start">
                    <Navbar toggleSidebar={toggleSidebar} />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar
                isOpen={isSidebarOpen}
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={toggleCollapse}
            />
            <main
                className={`p-4 transition-all duration-300 ease-in-out ${
                    isSidebarOpen
                        ? isSidebarCollapsed
                            ? 'ml-16'
                            : 'ml-64'
                        : 'ml-0'
                }`}
            >
                <h2 className="text-2xl font-bold mb-4">
                    Welcome to the Dashboard
                </h2>
                <p>
                    This is where your main content will go. Add your
                    components, graphs, and charts here.
                </p>
            </main>
        </div>
    );
};

export default Dashboard;

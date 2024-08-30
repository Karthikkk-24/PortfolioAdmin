import { Menu, Settings } from 'lucide-react';
import PropTypes from 'prop-types';

export default function Navbar({ toggleSidebar }) {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="mr-4">
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
                <span className="mr-4">John Doe</span>
                <Settings size={20} />
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
}
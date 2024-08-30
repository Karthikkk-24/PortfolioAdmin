import {
    ChevronLeft,
    ChevronRight,
    Home,
    Settings,
    Users,
} from 'lucide-react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';

export default function Sidebar({ isOpen, isCollapsed, toggleCollapse }) {
    return (
        <aside
            className={`bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out pl-3 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } ${isCollapsed ? 'w-full' : 'w-full'}`}
        >
            <div className="p-4 flex justify-between items-center pl-6">
                {!isCollapsed && (
                    <h2 className="text-lg font-semibold">Portfolio Admin</h2>
                )}
                <button
                    onClick={toggleCollapse}
                    className="p-1 rounded hover:bg-blue-700 transition-colors"
                >
                    {isCollapsed ? (
                        <ChevronRight size={20} />
                    ) : (
                        <ChevronLeft size={20} />
                    )}
                </button>
            </div>
            <ul className="mt-4 pl-3">
                <SidebarItem
                    icon={Home}
                    text="Dashboard"
                    isCollapsed={isCollapsed}
                />
                <SidebarItem
                    icon={Users}
                    text="Users"
                    isCollapsed={isCollapsed}
                />
                <SidebarItem
                    icon={Settings}
                    text="Settings"
                    isCollapsed={isCollapsed}
                />
            </ul>
        </aside>
    );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isCollapsed: PropTypes.bool.isRequired,
    toggleCollapse: PropTypes.func.isRequired,
};
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
            className={`bg-gray-900 text-white h-screen fixed left-0 top-0 transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } ${isCollapsed ? 'w-16' : 'w-64'}`}
        >
            <div className="p-4 flex justify-between items-center">
                {!isCollapsed && (
                    <h2 className="text-lg font-semibold">Menu</h2>
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
            <ul className="mt-4">
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
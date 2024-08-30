
import PropTypes from 'prop-types';

export default function SidebarItem({ icon: Icon, text, isCollapsed }) {
    return (
        <li className="mb-2">
            <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-blue-700 transition-colors"
            >
                <Icon size={20} />
                {!isCollapsed && <span className="ml-2">{text}</span>}
            </a>
        </li>
    );
}

SidebarItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
    isCollapsed: PropTypes.bool.isRequired,
};

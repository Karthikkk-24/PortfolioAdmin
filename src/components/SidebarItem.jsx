
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SidebarItem({ icon: Icon, text, isCollapsed, url }) {
    return (
        <li className="mb-2">
            <Link
                to={url}
                className="flex items-center p-2 rounded hover:bg-blue-700 transition-colors"
            >
                <Icon size={20} />
                {!isCollapsed && <span className="ml-2">{text}</span>}
            </Link>
        </li>
    );
}

SidebarItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCollapsed: PropTypes.bool.isRequired,
};

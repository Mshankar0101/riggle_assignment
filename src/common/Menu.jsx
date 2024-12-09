import React,{useState} from 'react';
import {
    MdDashboard,
    MdPerson,
    MdBrandingWatermark,
    MdGpsFixed,
    MdGroups
} from 'react-icons/md';
import useResizer from '../CustomHooks/useResizer';

const Menu = () => {
    const [activeItem, setActiveItem] = useState(0);
    const { width, height } = useResizer();

    const menuItems = [
        {
            icon: <MdDashboard size={20} />,
            label: 'Dashboard'
        },
        {
            icon: <MdBrandingWatermark size={20} />,
            label: 'Brands'
        },
        {
            icon: <MdPerson size={20} />,
            label: 'Sales Person'
        },
        {
            icon: <MdGpsFixed size={20} />,
            label: 'Target'
        },
        {
            icon: <MdGroups size={20} />,
            label: 'Channel Partners'
        }
    ];

    const sidebarStyle = {
        width: '100%',
        maxWidth: width < 480 ? '250px' : '399px',
        minHeight: '1035px',
        padding: '16px 0px',
        boxSizing: 'border-box',
        borderTopRightRadius: '16px',
        borderBottomRightRadius: '16px',
        boxShadow: '1px 0px 5px 0 #0000001a',
        position: 'absolute',
        top: width > 480 ? '115px' : '95px',
        left: 0,
        backgroundColor: '#fff',
        zIndex: 1000
    };

    const ulStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    };

    const liStyle = (isActive) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 20px',
        cursor: 'pointer',
        borderRight: isActive ? '4px solid #39CEF3' : 'none',
    });

    const iconStyle = {
        color: '#4B5563'
    };

    const labelStyle = {
        color: '#374151'
    };

    return (
        <div style={sidebarStyle}>
            <ul style={ulStyle}>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        style={liStyle(activeItem === index)}
                        id='menu-list'
                        onClick={() => setActiveItem(index)}
                    >
                        <span style={iconStyle}>{item.icon}</span>
                        <span style={labelStyle}>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;

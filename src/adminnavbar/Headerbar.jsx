import React from 'react';
import { NavLink } from 'react-router-dom';

const Headerbar = () => {
    const menuItem = [
        {
            path: "/Header",
            name: "Home screen",
        },
        {
            path: "/Eventssection",
            name: "Events",
        },
        {
            path: "/Achievementssection",
            name: "Achievements",
        }
        
    ];

    return (
        <div className="hed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="heder">
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="linkss2" activeClassName="active">
                        <div className="link_text2">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Headerbar;

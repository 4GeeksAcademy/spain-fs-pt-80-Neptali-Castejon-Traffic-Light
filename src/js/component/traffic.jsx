import React, { useState } from "react";
import PropTypes from "prop-types";

export const Traffic = ({ lightsData }) => {
    
    const [activeColor, setActiveColor] = useState('');

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="semaphore gap-3">
                {lightsData.map((light, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveColor(light.color)}
                        className={`${light.bgColor} traffic-light-circle ${activeColor === light.color ? 'glow' : ''}`}
                    >
                        {activeColor === light.color && <i className={light.icon}></i>}
                    </div>
                ))}
            </div>
        </div>
    );
};

Traffic.propTypes = {
    lightsData: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            bgColor: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
};
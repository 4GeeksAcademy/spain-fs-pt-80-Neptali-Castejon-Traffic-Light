import React, { useState } from "react";

export const TrafficLight = () => {
    
    const [activeColor, setActiveColor] = useState('');

    const lights = [
        { color: 'red', bgColor: 'bg-danger', icon: 'fa-regular fa-hand' },
        { color: 'yellow', bgColor: 'bg-warning', icon: 'fa fa-exclamation-triangle semaphore__icon--adjusted' },
        { color: 'green', bgColor: 'bg-success', icon: 'fa-brands fa-golang' }
    ];

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="semaphore">
                {lights.map((light, index) => (
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

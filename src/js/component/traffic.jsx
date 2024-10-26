import React, { useState } from "react";

export const TrafficLight = () => {
    
    const [activeColor, setActiveColor] = useState('');

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="semaphore">
                <div 
                    onClick={() => setActiveColor('red')} 
                    className={`bg-danger traffic-light-circle ${activeColor === 'red' ? 'glow' : ''}`}
                >
                    {activeColor === 'red' && <i className="fa-regular fa-hand"></i>}
                </div>

                <div 
                    onClick={() => setActiveColor('yellow')} 
                    className={`bg-warning traffic-light-circle ${activeColor === 'yellow' ? 'glow' : ''}`}
                >
                    {activeColor === 'yellow' && <i className="fa fa-exclamation-triangle semaphore__icon--adjusted"></i>}
                </div>

                <div 
                    onClick={() => setActiveColor('green')} 
                    className={`bg-success traffic-light-circle ${activeColor === 'green' ? 'glow' : ''}`}
                >
                    {activeColor === 'green' && <i className="fa-brands fa-golang"></i>}
                </div>
            </div>
        </div>
    );
};

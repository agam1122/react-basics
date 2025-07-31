import { useState, useEffect } from 'react';

function Clock({color}){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>
                <span style={{color: color, backgroundColor: "black", borderRadius: 5, padding:"5px"}}>
                    {time.toLocaleTimeString()}
                </span>
            </h1>
        </div>
    );
}

export default Clock;
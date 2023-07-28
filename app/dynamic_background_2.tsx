import React, { useState, useEffect } from 'react';
import YourComponent_2 from './YourComponent_2';



const DynamicBackgroundScreen_2: React.FC = () => {
    const [backgroundColor, setBackgroundColor] = useState<string>('white'); // Default background color

    useEffect(() => {
        const interval = setInterval(() => {
        // Get the current hour of the day
        const currentHour = new Date().getHours();

        // Define background colors for different times of the day
        // Customize these colors as per your preference
        let newBackgroundColor = 'white'; // Default background color

        if (currentHour >= 6 && currentHour < 12) {
            // Morning (6:00 AM - 11:59 AM)
            newBackgroundColor = '#FAF3F0';
        } else if (currentHour >= 12 && currentHour < 18) {
            // Afternoon (12:00 PM - 5:59 PM)
            newBackgroundColor = '#D4E2D4';
        } else if (currentHour >= 18 && currentHour < 22) {
            // Evening (6:00 PM - 9:59 PM)
            newBackgroundColor = '#FFCACC';
        } else {
            // Night (10:00 PM - 5:59 AM)
            newBackgroundColor = '#DBC4F0';
        }

        setBackgroundColor(newBackgroundColor);
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return <YourComponent_2 backgroundColor={backgroundColor} />;
};

export default DynamicBackgroundScreen_2;
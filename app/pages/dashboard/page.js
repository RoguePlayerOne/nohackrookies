// app/dashboard/page.js
'use client';
import React from 'react';
import '../../styles/dashboard.css';
import ChartComponent from '../ChartComponent';
import Navbar from '../Navbar';

const Page = () => {
    const [focusedDate, setFocusedDate] = React.useState(new Date());
    const [events, setEvents] = React.useState([]); // To hold events
    const [eventInput, setEventInput] = React.useState(''); // For event input

    const handleAddEvent = () => {
        if (eventInput) {
            // Save the event with the focused date
            const newEvent = {
                date: focusedDate,
                title: eventInput,
            };
            setEvents([...events, newEvent]);
            setEventInput(''); // Clear input after saving
        }
    };

    return (
        <div>
            <Navbar />
            <div className='contributions'>
                Your Contributions
            </div>
            <div className='chart'>
                <ChartComponent />
            </div>
            <div className='calendar'>
                <h2>Event Calendar</h2>
                <div className='calendar-header'>
                    {/* <Calendar 
                        events={events} // Pass the events to the Calendar
                        focusedDate={focusedDate}
                        onFocusChange={setFocusedDate} // Optional if you want to manage focus externally
                    /> */}
                </div>
                <div className='event-input'>
                    <input 
                        type="text" 
                        value={eventInput} 
                        onChange={(e) => setEventInput(e.target.value)} 
                        placeholder="Add Event"
                    />
                    <button onClick={handleAddEvent}>Add Event</button>
                </div>
                <div className='event-list'>
                    <h3>Events:</h3>
                    <ul>
                        {events.map((event, index) => (
                            <li key={index}>
                                {new Date(event.date).toLocaleDateString()} - {event.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Page;

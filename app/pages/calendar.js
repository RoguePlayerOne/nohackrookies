// components/Calendar.js
import React, { useState, useEffect } from 'react';
import '../styles/calendar.css';

const Calendar = ({ events }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dates, setDates] = useState([]);

    const generateDates = (date) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        const daysInMonth = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();

        const dateArray = [];
        
        // Fill the calendar with empty slots before the first day of the month
        for (let i = 0; i < firstDayIndex; i++) {
            dateArray.push(<li key={`empty-${i}`} className="inactive"></li>);
        }

        // Fill the calendar with the actual dates
        for (let i = 1; i <= daysInMonth; i++) {
            const eventOnDate = events.find(event => 
                new Date(event.date).getDate() === i && 
                new Date(event.date).getMonth() === month && 
                new Date(event.date).getFullYear() === year
            );

            dateArray.push(
                <li key={i} className={`active ${eventOnDate ? 'has-event' : ''}`}>
                    {i}
                    {eventOnDate && <div className="event-indicator">{eventOnDate.title}</div>}
                </li>
            );
        }

        setDates(dateArray);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    useEffect(() => {
        generateDates(currentDate);
    }, [currentDate, events]);

    return (
        <div className="calendar-container">
            <header className="calendar-header">
                <p className="calendar-current-date">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                <div className="calendar-navigation">
                    <span onClick={handlePrevMonth} className="material-symbols-rounded">
                        chevron_left
                    </span>
                    <span onClick={handleNextMonth} className="material-symbols-rounded">
                        chevron_right
                    </span>
                </div>
            </header>

            <div className="calendar-body">
                <ul className="calendar-weekdays">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className="calendar-dates">
                    {dates}
                </ul>
            </div>
        </div>
    );
};

export default Calendar;

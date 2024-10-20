// pages/calendar.js
import React from 'react';
import Navbar from '../Navbar';

const Calendar = () => {
  return (
    <div>
        <Navbar/>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px', position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=dhruv.baljekar108%40gmail.com&ctz=Asia%2FKolkata"
        style={{ border: '0', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
    </div>
  );
};

export default Calendar;

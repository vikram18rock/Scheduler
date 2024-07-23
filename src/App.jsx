import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Course from './components/Course.jsx';
import TimeTable from './components/TimeTable.jsx';
import Downloader from './components/Downloader.jsx';

function App() {
    const [course, setCourse] = useState('');

    // Slot system
    const slots = {
        'commonSlots' : ['f', 'g', 'h'],
        'batchSlots' : ['a', 'b', 'c', 'd', 'e', 't']
    };

    const timings = {
        // Morning batch
        1: [
            '08:00 - 08:50',
            '09:00 - 09:50',
            '10:00 - 10:50',
            '11:00 - 11:50',
            '12:00 - 12:50',
            '13:00 - 13:50',
            '14:00 - 16:50',
            '17:00 - 17:50',
        ],
        // Afternoon batch
        2: [
            '08:00 - 08:50',
            '09:00 - 11:50',
            '12:00 - 12:50',
            '13:00 - 13:50',
            '14:00 - 14:50',
            '15:00 - 15:50',
            '16:00 - 16:50',
            '17:00 - 17:50',
        ]
    };

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    // morning batch - 1, afternoon batch - 2

    // defaulting to morning batch
    const [batchNo, setBatchNo] = useState(1);

	return (
		<div className='App'>
            <Header />
            <div className='container'>
                <Course course={course} onInput={setCourse}/>
                <TimeTable slots={slots} days={days} timings = {timings} no={batchNo}/>
            </div>
            <Downloader />
            <Footer />
		</div>
	)
}

export default App

import React, { useState } from 'react';

import Main from './Main';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';

interface NoteType {
    projectName: string;
    projectContent: string;
    projectThumbnail: string;
}

function App() {
    const [notes, setNotes] = useState<NoteType[]>([]);

    function newNote(news: any) {
        setNotes((prev) => {
            return [...prev, news];
        });
    }

    return (
        <div>
            <Main add={newNote} />
        </div>
    );
}

export default App;

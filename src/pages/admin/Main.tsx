import React, { useState } from 'react';
import {
    form,
    header,
    headerH1,
    footer,
    footerP,
    note,
    noteH1,
    noteP,
    noteButton,
    projectInput,
    formInput,
    formTextarea,
    formButton,
} from './stl';

const rows: number = 12;

interface MainProps {
    key: number;
    projectName: string;
    projectContent: string;
    projectThumbnail: string;
}

interface Note {
    projectName: string;
    projectContent: string;
    projectThumbnail: string;
}

interface MainComponentProps {
    add: (note: Note) => void;
}

function Main(props: MainComponentProps) {
    const [note, setNote] = useState<Note>({
        projectName: '',
        projectContent: '',
        projectThumbnail: '',
    });

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;

        setNote((prevNote) => ({
            ...prevNote,
            [name]: value,
        }));
    }

    function handleSubmit(event: React.FormEvent) {
        props.add(note);
        setNote({
            projectName: '',
            projectContent: '',
            projectThumbnail: '',
        });
        event.preventDefault();
    }

    return (
        <div style={{ backgroundColor: 'black', margin: '0px 0px 0px 0px' }}>
            <form style={form}>
                <input
                    id="Name"
                    className="project"
                    name="projectName"
                    onChange={handleChange}
                    value={note.projectName}
                    placeholder="Project Name"
                    style={formInput}
                />
                <input
                    id="Thumbnail"
                    className="project"
                    name="projectThumbnail"
                    onChange={handleChange}
                    value={note.projectThumbnail}
                    placeholder="Project Thumbnail"
                    style={formInput}
                />
                <textarea
                    id="content"
                    className="project"
                    name="projectContent"
                    onChange={handleChange}
                    value={note.projectContent}
                    placeholder="Project Content"
                    rows={rows}
                    style={formTextarea}
                />
                <button onClick={handleSubmit} style={formButton}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default Main;

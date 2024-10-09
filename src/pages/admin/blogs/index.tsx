import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../../../styles/Markdown.module.css';
import { db } from '../../../firebase.js';
import { bgColor, color } from '@/constants';

// Define the function type for addUser

export default function Markdown() {
    const [isPrevClicked, setIsPrevClicked] = useState<boolean>(false);
    const [isEditClicked, setIsEditClicked] = useState<boolean>(true);

    const handlePrevClick = (): void => {
        setIsPrevClicked(true);
        setIsEditClicked(false);
        let t = document.querySelector('#title') as HTMLInputElement;
        let d = document.querySelector('#description') as HTMLTextAreaElement;
        let m = document.querySelector('#date') as HTMLInputElement;
        if (t && d && m) {
            t.disabled = true;
            d.disabled = true;
            m.disabled = true;
        }
        let save = document.querySelector('#save') as HTMLButtonElement;
        if (save) save.disabled = true;
    };

    const handleEditClick = () => {
        setIsEditClicked(true);
        setIsPrevClicked(false);
        let t = document.querySelector('#title') as HTMLInputElement;
        let d = document.querySelector('#description') as HTMLTextAreaElement;
        let m = document.querySelector('#date') as HTMLInputElement;
        if (t && d && m) {
            t.disabled = false;
            d.disabled = false;
            m.disabled = false;
        }
    };

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleChange = (): void => {
        let save = document.querySelector('#save') as HTMLButtonElement;
        let add = document.querySelector('#add') as HTMLButtonElement;
        if (save) save.disabled = false;
        if (add) add.disabled = false;
    };

    const handleSubmit = async () => {
        try {
            // Add a new document to the 'users' collection
            await addDoc(collection(db, 'users'), {
                title: title,
                description: description,
                date: date,
            });
            console.log('Document written successfully');
        } catch {
            console.log('Error adding document');
        }

        setTitle('');
        setDescription('');
        setDate('');
    };

    return (
        <div
            className={styles.main}
            style={{ backgroundColor: bgColor, color: color }}
        >
            <h1>Add Blog</h1>
            <div className={styles.container}>
                <div className={styles.options}>
                    <div
                        id="edit"
                        className={
                            isEditClicked ? styles.opthigh : styles.optlow
                        }
                        onClick={handleEditClick}
                    >
                        Edit
                    </div>
                    <div
                        id="preview"
                        className={
                            isPrevClicked ? styles.opthigh : styles.optlow
                        }
                        onClick={handlePrevClick}
                    >
                        Preview
                    </div>
                </div>
                <div className={styles.innerContainer}>
                    <h4 className={styles.heading}>Title :</h4>
                    <input
                        id="title"
                        className={styles.title}
                        style={{ color: color }}
                        placeholder="Add Title"
                        onChange={(e) => {
                            handleChange();
                            setTitle(e.target.value);
                        }}
                        value={title}
                    ></input>

                    <h4 className={styles.heading}>Description :</h4>
                    <textarea
                        id="description"
                        className={styles.description}
                        placeholder="Add Description"
                        style={{ color: color }}
                        onChange={(e) => {
                            handleChange();
                            setDescription(e.target.value);
                        }}
                        value={description}
                    ></textarea>

                    <h4 className={styles.heading}>Date :</h4>
                    <input
                        id="date"
                        className={styles.date}
                        placeholder="Add Date"
                        style={{ color: color }}
                        onChange={(e) => {
                            handleChange();
                            setDate(e.target.value);
                        }}
                        value={date}
                    ></input>
                    <div className={styles.btns}>
                        <button
                            id="save"
                            className={styles.btn}
                            onClick={() => {
                                let save = document.querySelector(
                                    '#save'
                                ) as HTMLButtonElement;
                                if (save) save.disabled = true;
                            }}
                        >
                            Save
                        </button>
                        <button
                            id="add"
                            className={styles.btn}
                            onClick={() => {
                                handleSubmit();
                                let add = document.querySelector(
                                    '#add'
                                ) as HTMLButtonElement;
                                if (add) add.disabled = true;
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../../../styles/Markdown.module.css';
import { db } from '../../../firebase.js';
import { bgColor, color, h5, h5_, h6, h6_ } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';

// Define the function type for addUser

export default function Markdown() {
    const breakPoint = useMediaQuery('(min-width:600px)');

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const [isPrevClicked, setIsPrevClicked] = useState<boolean>(false);
    const [isEditClicked, setIsEditClicked] = useState<boolean>(true);

    const handlePrevClick = (): void => {
        setIsPrevClicked(true);
        setIsEditClicked(false);
    };

    const handleEditClick = () => {
        setIsEditClicked(true);
        setIsPrevClicked(false);
    };

    const handleSave = () => {
        let save = document.querySelector('#save') as HTMLButtonElement;
        if (save) save.disabled = true;
    };

    const handleSubmit = async () => {
        try {
            // Add a new document to the 'users' collection
            await addDoc(collection(db, 'users'), {
                title: title,
                subtitle: subtitle,
                date: date,
                content: content,
            });
            console.log('Document written successfully');
        } catch {
            console.log('Error adding document');
        }
        setTitle('');
        setSubtitle('');
        setDate('');
        setContent('');
        let add = document.querySelector('#add') as HTMLButtonElement;
        if (add) add.disabled = true;
    };

    const handleChange = () => {
        let save = document.querySelector('#save') as HTMLButtonElement;
        if (save) save.disabled = false;
        let add = document.querySelector('#add') as HTMLButtonElement;
        if (add) add.disabled = false;
    };

    return (
        <div
            className={styles.main}
            style={{ backgroundColor: bgColor, color: color }}
        >
            <h1>Add Blogs</h1>
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
                <div
                    className={styles.innerContainer}
                    style={{ display: isEditClicked ? 'block' : 'none' }}
                >
                    <div>
                        <h4 className={styles.heading}>Title :</h4>
                        <input
                            id="title"
                            className={styles.data}
                            placeholder="Add Title..."
                            style={{ color: color }}
                            onChange={(e) => {
                                handleChange();
                                setTitle(e.target.value);
                            }}
                            value={title}
                        ></input>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Subtitle :</h4>
                        <textarea
                            id="subtitle"
                            className={styles.data}
                            placeholder="Add Subtitle..."
                            style={{ color: color }}
                            onChange={(e) => {
                                handleChange();
                                setSubtitle(e.target.value);
                            }}
                            value={subtitle}
                        ></textarea>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Date :</h4>
                        <input
                            id="date"
                            className={styles.data}
                            placeholder="Add Date..."
                            style={{ color: color }}
                            onChange={(e) => {
                                handleChange();
                                setDate(e.target.value);
                            }}
                            value={date}
                        ></input>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Content :</h4>
                        <textarea
                            id="content"
                            className={styles.content}
                            placeholder="Add Content..."
                            style={{ color: color }}
                            onChange={(e) => {
                                handleChange();
                                setContent(e.target.value);
                            }}
                            value={content}
                        ></textarea>
                    </div>

                    <div className={styles.btns}>
                        <button
                            id="save"
                            className={styles.btn}
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            id="add"
                            className={styles.btn}
                            onClick={handleSubmit}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div
                    className={styles.previewTab}
                    style={{ display: isEditClicked ? 'none' : 'block' }}
                >
                    <Box mb="35px">
                        <Typography
                            variant="h2"
                            color={color}
                            fontSize={breakPoint ? h5 : h5_}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body1"
                            lineHeight="1.5"
                            color="gray"
                            margin="4px auto"
                            fontSize={h6}
                        >
                            {subtitle}
                        </Typography>
                        <Typography
                            variant="body1"
                            lineHeight="1.5"
                            color="gray"
                            margin="4px auto"
                            fontSize={h6_}
                        >
                            {date}
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
}

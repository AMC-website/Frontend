import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../../../styles/Markdown.module.css';
import { db } from '../../../firebase.js';
import { bgColor, color, h5, h5_, h6, h6_ } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';
import matter from 'gray-matter';

// Define the function type for addUser

export default function Markdown() {
    const breakPoint = useMediaQuery('(min-width:600px)');

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

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [date, setDate] = useState('');

    const [data, setData] = useState<string>('');

    const handleSave = () => {
        setTitle(matter(data).data.title);
        setSubtitle(matter(data).data.subtitle);
        setDate(matter(data).data.date);

        let save = document.querySelector('#save') as HTMLButtonElement;
        if (save) save.disabled = true;
    };

    const handleSubmit = async () => {
        try {
            // Add a new document to the 'users' collection
            await addDoc(collection(db, 'users'), {
                data: data,
            });
            console.log('Document written successfully');
        } catch {
            console.log('Error adding document');
        }
        setData('');
        let add = document.querySelector('#add') as HTMLButtonElement;
        if (add) add.disabled = true;
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
                        <h4 className={styles.heading}>Blog :</h4>
                        <textarea
                            id="data"
                            className={styles.data}
                            placeholder="Write Blog"
                            style={{ color: color }}
                            onChange={(e) => {
                                setData(e.target.value);
                                let save = document.querySelector(
                                    '#save'
                                ) as HTMLButtonElement;
                                if (save) save.disabled = false;
                                let add = document.querySelector(
                                    '#add'
                                ) as HTMLButtonElement;
                                if (add) add.disabled = false;
                            }}
                            value={data}
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

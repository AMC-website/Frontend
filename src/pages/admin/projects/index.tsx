import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase.js';
import { bgColor, color, h4, h5, h5_, h6, h6_ } from '@/constants';
import axios from 'axios';
import { border, borderRadius } from '@mui/system';
import styles from "@/styles/admin.projects.module.css"

export default function AddProject() {
    const [modelName, setModelName] = useState('');
    const [file, setFile] = useState(null);
    const [modelDesc, setModelDesc] = useState('');

    const handleSubmit = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'model_image'); // Replace with your Cloudinary upload preset
        formData.append('cloud_name', 'dxxurstw7');

        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dxxurstw7/image/upload', // Replace with your Cloudinary endpoint
                formData
            );
            // Add a new document to the 'users' collection
            await addDoc(collection(db, 'projects'), {
                modelName: modelName,
                modelImg: response.data.secure_url,
                modelDesc: modelDesc,
            });
            console.log('Document written successfully');
        } catch {
            console.log('Error adding document');
        }
        setModelName('');
        setFile(null);
        setModelDesc('');
    };

    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: color,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1
                style={{
                    display: 'block',
                    fontSize: h4,
                    marginBottom: '50px',
                }}
            >
                Add Projects
            </h1>
            <div
                style={{
                    width: '80%',
                    marginBottom: '50px',
                }}
            >
                <label style={{ fontSize: h5_ }} htmlFor="modelName">
                    Project Name :
                </label>
                <input
                    name="modelName"
                    placeholder="Enter project name"
                    type="text"
                    onChange={(e) => setModelName(e.target.value)}
                    value={modelName}
                    style={{
                        backgroundColor: color,
                        width: '100%',
                        fontSize: h6,
                        height: '40px',
                        borderRadius: '1rem',
                        marginTop: '20px',
                        padding: '10px',
                    }}
                />
            </div>
            <div
                style={{
                    width: '80%',
                    marginBottom: '50px',
                }}
            >
                <label style={{ fontSize: h5_ }} htmlFor="modelImg">
                    Project Image :
                </label>
                <br />
                <div className={styles.fileInputWrapper}>
                    <button className={styles.fileInputButton}
                        style={{
                            fontSize: h6,
                            borderRadius: '1rem',
                            marginTop: '20px',
                            marginRight: '10px',
                        }}>Choose File</button>
                    <input
                        name="modelImg"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files[0])}
                        className={styles.fileInput}
                        style={{
                            fontSize: h6,
                            borderRadius: '1rem',
                            marginTop: '20px',
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    width: '80%',
                    marginBottom: '60px',
                }}
            >
                <label style={{ fontSize: h5_ }} htmlFor="modelDesc">
                    Project Description :
                </label>
                <textarea
                    name="modelDesc"
                    placeholder="Enter project description"
                    onChange={(e) => setModelDesc(e.target.value)}
                    style={{
                        backgroundColor: color,
                        width: '100%',
                        fontSize: h6,
                        height: '100px',
                        borderRadius: '1rem',
                        marginTop: '20px',
                        padding: '10px',
                    }}
                    value={modelDesc}
                ></textarea>
            </div>
            <button
                style={{
                    marginBottom: '30px',
                    width: '8rem',
                    height: '4rem',
                    backgroundColor: '#50C878',
                    borderRadius: '1rem',
                    fontSize: h6_,
                }}
                id="add"
                onClick={() => handleSubmit()}
                value={modelDesc}
            >
                Add
            </button>
        </div>
    );
}

'use client';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.js';

export default async function GetBlogs() {
    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // Reference to 'users' collection
    //             const querySnapshot = await getDocs(collection(db, 'users'));

    //             // Map the documents from the snapshot to an array of user data
    //             const usersData = querySnapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data(),
    //             }));

    //             setBlogs(usersData);
    //         } catch (error) {
    //             console.error('Error reading data: ', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    try {
        // Reference to 'users' collection
        const querySnapshot = await getDocs(collection(db, 'users'));

        // Map the documents from the snapshot to an array of user data
        const usersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }));
        return usersData;
    } catch (error) {
        console.error('Error reading data: ', error);
    }
}

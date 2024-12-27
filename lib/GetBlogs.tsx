'use client';
//import React, { useState, useEffect } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../src/firebase';

export async function GetBlogs() {
    try {
        console.log('Getting All Blogs');
        // Reference to 'users' collection
        const querySnapshot = await getDocs(collection(db, 'users'));

        // Map the documents from the snapshot to an array of user data
        const usersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return usersData;
    } catch (error) {
        console.error('Error reading data: ', error);
    }
}


export async function GetBlogById(blogId: string) {
    try {
        console.log('Getting blog by Id');
        // Refernce to the blodId document under 'users' collection
        const querySnapshot = await getDoc(doc(db, "users", blogId));
        return querySnapshot.data();

    } catch (error) {
        console.error('Error reading data: ', error);
    }
}
'use client';
//import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../src/firebase';

export default async function GetProjects() {
    try {
        // Reference to 'users' collection
        const querySnapshot = await getDocs(collection(db, 'projects'));

        // Map the documents from the snapshot to an array of user data
        const projectsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return projectsData;
    } catch (error) {
        console.error('Error reading data: ', error);
    }
}

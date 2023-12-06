import React from 'react';
import { getSortedPostsData } from '../../../lib/getPosts';
import Link from 'next/link';

export default function index({ allPostsData }) {
    return (
        <div>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section>
                <h2>Blog</h2>
                <ul>
                    {allPostsData.map(({id,  date, title }) => (
                        <h1 key={title}>
                            <Link href={`/blogs/${id}`}>{title}</Link>
                            <br />
                            {date}
                            <br />
                        </h1>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

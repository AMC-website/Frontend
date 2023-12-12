import React, { Key } from 'react';
import { getSortedPostsData } from 'lib/getPosts';
import Link from 'next/link';

export default function BlogPosts({ allPostsData }) {
    return (
        <div>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section>
                <h2>List of all Blogs</h2>
                <ul>
                    {allPostsData.map(
                        ({ id, date, title, subtitle }, index: Key) => (
                            <div key={index}>
                                <Link href={`/blogs/${id}`}>
                                    <h2>{title}</h2>
                                </Link>
                                <p>{date}</p>
                                <p>{subtitle}</p>
                            </div>
                        )
                    )}
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

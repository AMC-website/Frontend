import React, { Key } from 'react';
import { getSortedPostsData } from 'lib/getPosts';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';

export default function BlogPosts({ allPostsData }) {
    return (
        <Box>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <Container>
                <Typography variant="h2">List of all Blogs</Typography>
                <ul>
                    {allPostsData.map(
                        ({ id, date, title, subtitle }, index: Key) => (
                            <Box key={index}>
                                <Link href={`/blogs/${id}`}>
                                    <Typography variant="h2">
                                        {title}
                                    </Typography>
                                </Link>
                                <Typography variant="body2">{date}</Typography>
                                <Typography variant="body1">
                                    {subtitle}
                                </Typography>
                            </Box>
                        )
                    )}
                </ul>
            </Container>
        </Box>
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

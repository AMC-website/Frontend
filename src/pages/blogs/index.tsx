import React, { Key } from 'react';
import Link from 'next/link';
import GetBlogs from '../admin/blogs/GetBlogs';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { bgColor, color, h4, h5, h5_, h6, h6_ } from '@/constants';
import matter from 'gray-matter';

export default function BlogPosts() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const blogs = GetBlogs();

    let extractData = (data) => {
        const matterResult = matter(data);
        return matterResult.data;
    };

    return (
        <Box padding="10px 7.5% 100px" bgcolor={bgColor} color="white">
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <Container sx={{ padding: 0, margin: 0 }}>
                <Typography
                    variant="h1"
                    color={color}
                    fontSize={breakPoint ? h4 : h5}
                    mb="35px"
                >
                    Aero Blogs
                </Typography>
                <ul>
                    {blogs.map(({ id, data }, index: Key) => (
                        <Box key={index} mb="35px">
                            <Link
                                href={`/blogs/${id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    variant="h2"
                                    color={color}
                                    fontSize={breakPoint ? h5 : h5_}
                                >
                                    {extractData(data).title}
                                </Typography>
                            </Link>
                            <Typography
                                variant="body1"
                                lineHeight="1.5"
                                color="gray"
                                margin="4px auto"
                                fontSize={h6}
                            >
                                {extractData(data).subtitle}
                            </Typography>
                            <Typography
                                variant="body1"
                                lineHeight="1.5"
                                color="gray"
                                margin="4px auto"
                                fontSize={h6_}
                            >
                                {extractData(data).date}
                            </Typography>
                        </Box>
                    ))}
                </ul>
            </Container>
        </Box>
    );
}

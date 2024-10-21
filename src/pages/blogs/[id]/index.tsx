import React, { useState } from 'react';
// import GetBlogs from '../../admin/blogs/GetBlogs';
import GetBlogs from 'lib/GetBlogs';
import Markdown from 'markdown-to-jsx';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { bgColor, color, h4, h5, h6 } from '@/constants';
import matter from 'gray-matter';

export async function getStaticProps({ params }) {
    const id = params.id;
    return {
        props: {
            id,
        },
    };
}

export async function getStaticPaths() {
    const blogs = await GetBlogs();
    const paths = blogs.map((blog) => {
        return {
            params: {
                id: blog.id,
            },
        };
    });

    return {
        paths,
        fallback: true,
    };
}

export default function Post({ id }) {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const [blogData, setBlogData] = useState({
        data: {
            title: "",
            date: ""
        },
        content: ""
    });


    GetBlogs().then((blogs) => {
        const blog: string = blogs.filter((blog) => {
            return blog.id == id;
        })[0].data.data;
        const data = matter(blog);
        setBlogData({
            data: {
                title: data.data.title,
                date: data.data.date
            },
            content: data.content
        });
    });




    return (
        <Box padding="10px 7.5% 100px" bgcolor={bgColor} color="white">
            <Typography
                variant="h1"
                color={color}
                fontSize={breakPoint ? h4 : h5}
                mb="35px"
            >
                {blogData.data.title}
            </Typography>

            <Typography
                variant="body1"
                lineHeight="1.5"
                color="gray"
                margin="8px auto"
                fontSize={h6}
            >
                {blogData.data.date}
            </Typography>

            <Box>
                <Typography
                    variant="h3"
                    lineHeight="1.5"
                    color={color}
                    margin="0 auto"
                    fontSize={h6}
                >
                    <Markdown children={blogData.content} />
                </Typography>
            </Box>
        </Box>
    );
}

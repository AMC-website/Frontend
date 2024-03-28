import React from 'react';

import { getAllPostIds, getPostData } from 'lib/getPosts';
import Markdown from 'markdown-to-jsx';
import { Box, Typography } from '@mui/material';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Box>
            <Typography variant="h1">{postData.title}</Typography>

            <Typography variant="body2">{postData.date}</Typography>

            <Box>
                <Markdown children={postData.contentHtml} />
            </Box>
        </Box>
    );
}

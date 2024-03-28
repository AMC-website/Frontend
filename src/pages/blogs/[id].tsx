import React from 'react';

import { getAllPostIds, getPostData } from 'lib/getPosts';
import Markdown from 'markdown-to-jsx';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { bgColor, color, h4, h5, h6 } from '@/constants';

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
    const breakPoint = useMediaQuery('(min-width:600px)');

    return (
        <Box padding="0 7.5% 100px" bgcolor={bgColor} color="white">
            <Typography
                variant="h1"
                color={color}
                fontSize={breakPoint ? h4 : h5}
                mb="35px"
            >
                {postData.title}
            </Typography>

            <Typography
                variant="body1"
                lineHeight="1.5"
                color='gray'
                margin="8px auto"
                fontSize={h6}
            >
                {postData.date}
            </Typography>

            <Box>
                <Typography
                    variant="h3"
                    lineHeight="1.5"
                    color={color}
                    margin="0 auto"
                    fontSize={h6}
                >
                    <Markdown children={postData.contentHtml} />
                </Typography>
            </Box>
        </Box>
    );
}

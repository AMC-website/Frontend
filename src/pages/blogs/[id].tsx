import React from 'react';

import { getAllPostIds, getPostData } from 'lib/getPosts';
import Markdown from 'markdown-to-jsx';

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
        <div>
            <h1>{postData.title}</h1>

            <p>{postData.date}</p>

            <div>
                <Markdown children={postData.contentHtml} />
            </div>
        </div>
    );
}

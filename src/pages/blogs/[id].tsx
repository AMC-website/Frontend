import React from 'react';

import { getAllPostIds, getPostData } from '../../../lib/getPosts';
import Markdown from 'react-markdown';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
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
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    );
}

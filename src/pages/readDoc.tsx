// pages/MarkdownPage.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import MarkdownToHtml from 'lib/markDowntoHtml';
import path from 'path';
import MarkdownRenderer from './MarkdownRenderer';

const MarkdownPage: React.FC<{ markdown: string }> = ({ markdown }) => {
    return (
        <div>
            <h1>Markdown Content</h1>
            <MarkdownRenderer markdown={markdown} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'README.md'); // Provide the path to your .md file
    const markdownHtml = await MarkdownToHtml(filePath);

    return {
        props: {
            markdown: markdownHtml,
        },
    };
};

export default MarkdownPage;

import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer: React.FC<{
    markdown: string;
}> = ({ markdown }) => {
    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;

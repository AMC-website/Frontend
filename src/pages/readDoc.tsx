// pages/MarkdownPage.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import MarkdownToHtml from 'lib/markDowntoHtml';
import path from 'path';
interface MarkdownPageProps {
  markdownHtml: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ markdownHtml }) => {
  return (
    <div>
      <h1>Markdown Content</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'README.md'); // Provide the path to your .md file
  const markdownHtml = await MarkdownToHtml(filePath);

  return {
    props: {
      markdownHtml,
    },
  };
};

export default MarkdownPage;

// lib/markdownToHtml.ts
import fs from 'fs';
import path from 'path';
import {remark} from 'remark';
import html from 'remark-html';

let MarkdownToHtml=async (filePath: string)=> {
    
  try {
    const markdown = fs.readFileSync(filePath, 'utf-8');
    const result = await remark().use(html).process(markdown);
    return result.toString();
  } catch (error) {
    console.error('Error reading or converting Markdown file:', error);
    return '';
  }
}

export default MarkdownToHtml
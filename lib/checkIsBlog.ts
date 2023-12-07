import { useState } from 'react';

const checkIsBlog = (title) => {
    const [isBlog, setIsBlog] = useState(false);
    if (title === 'BLOGS') {
        setIsBlog(true);
    } else {
        return;
    }
    return isBlog;
};

export default checkIsBlog;

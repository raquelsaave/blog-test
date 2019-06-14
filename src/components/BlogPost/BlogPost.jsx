import React from 'react';

//
import ProfPic from './ProfPic/ProfPic';
import Cover from './Cover/Cover';

const BlogPost = () => {
    return (
    <>
    <div className="blogpost">
        <ProfPic />
        <Cover />
    </div>
    </>
    )
};

export default BlogPost;
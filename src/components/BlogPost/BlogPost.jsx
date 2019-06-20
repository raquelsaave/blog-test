import React from 'react';

//
import ProfPic from './ProfPic/ProfPic';
import Cover from './Cover/Cover';

const BlogPost = () => {
    return (
    <>
    <div className="blogpost">
        <Cover />
        <ProfPic />
    </div>
    </>
    )
};

export default BlogPost;
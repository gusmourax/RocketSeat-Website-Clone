import React from 'react';

import Begin from './Begin';
import SubBegin from './SubBegin';
import ClassRoom from './ClassRoom';
import Discord from './Discord';
import Partners from './Partners';

const Main = () => {
    return (
        <div className="content">
            <Begin />
            <SubBegin />
            <ClassRoom />
            <Discord />
            <Partners />
        </div>
    );
}

export default Main;
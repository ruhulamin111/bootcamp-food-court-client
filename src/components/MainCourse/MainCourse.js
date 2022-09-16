import React from 'react';
import { useMaincourse } from '../../hooks/useMaincourse';
import MainItem from './MainCourse/MainItem';

const MainCourse = () => {
    const [maincourse] = useMaincourse();

    return (
        <div className='grid grid-cols-3 gap-8 w-11/12 mx-auto'>
            {
                maincourse.map((item, index) => <MainItem
                    key={index}
                    item={item}
                ></MainItem>)
            }
        </div>
    );
};

export default MainCourse;
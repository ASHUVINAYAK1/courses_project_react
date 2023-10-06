import React from 'react';
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if(likedCourses.includes(course.id)){
            // pehle se liked h
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id)));
            toast.warning("like removed");
        }
        else{
            // pehle se liked nhi h
            // empty
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // non- empty
                setLikedCourses((prev) =>[...prev,course.id]);
            }
            toast.success("successfully liked")
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden relative min-h-[328px]'>
            <div className='relative'>
                <img src={course.image.url} alt='error'></img>
            </div>
            <div  className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[140px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ? (course.description.substr(0,100) + "..."):(course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;
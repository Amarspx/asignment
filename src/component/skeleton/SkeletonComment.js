import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const SkeletonComment = () => {
    return (
        <div className='commentRow'>
            <div className='commentList'>
                <Skeleton />
            </div>
            <div className='commentList'>
                <Skeleton />
            </div>
            <div className='commentList'>
                <p><Skeleton height={40} /></p>
            </div>
        </div>

    )
}

export default SkeletonComment;
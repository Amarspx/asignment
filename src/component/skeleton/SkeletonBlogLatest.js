import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const SkeletonBlogLatest = () => {
    return (
        <div className="p-2 col-md-3">
            <div className='blogItem'>
                <div className="blogImage">                          
                    <Skeleton height={260} />
                </div>
                <div className='blog-content'>
                    <h3 className='blog-title'>
                        <Skeleton count={2}/>
                    </h3>
                    <p><Skeleton/></p>
                </div>
            </div> 
        </div>
    )
}

export default SkeletonBlogLatest;
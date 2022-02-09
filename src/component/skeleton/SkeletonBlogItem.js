import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const SkeletonBlogHome = () => {
    return (
        <li className='col-md-3'>
            <div className="blogItem">
                <div className="blogImage">                          
                    <Skeleton height={270} />
                </div>
                <div className='blog-content'>
                    <h3 className='blog-title'>
                        <Skeleton count={2}/>
                    </h3>
                    <p><Skeleton/></p>
                </div>
            </div>
        </li>
    )
}

export default SkeletonBlogHome;
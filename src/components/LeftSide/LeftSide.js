// import './LeftSide.css';
import FeaturedPost from '../FeaturedPost/FeaturedPost.js';
import RecenPost from '../RecentPost/RecentPost.js';
export default function LeftSide(){
    return(
        <main role="main">
            <FeaturedPost />
            <RecenPost />
            <RecenPost />
            <RecenPost />  
        </main>
            

    );

}
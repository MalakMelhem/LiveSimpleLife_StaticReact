// import './RightSide.css';
import AboutMe from '../AboutMe/AboutMe';
import AsideRecentPost from '../AsideRecentPost/AsideRecentPost';
export default function RightSide(){
    return(
        <aside className="sidebar">
            <AboutMe />
            <AsideRecentPost />
        </aside>
    );
    
}

import MainTitle from "../MainTitle/MainTitle";
import AsidePost from "../AsidePost/AsidePost";
import './AsideRecentPost.css';

export default function AsideRecentPost(){
    return(
    <div className="asidebar-widget">
            <MainTitle />
            <AsidePost />
            <AsidePost />
            <AsidePost />
    </div>
    );
}
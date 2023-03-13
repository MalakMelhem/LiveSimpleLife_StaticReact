import img from '../../images/samantha-gades-BlIhVfXbi9s-unsplash.jpg';
import RecentDate from '../RecentDate/RecentDate';
import SubTitle from '../SubTitle/SubTitle';
import MainTitle from '../MainTitle/MainTitle';
import Paragraph from '../Paragraph/Paragraph';
import './FeaturedPost.css';
export default function FeaturedPost(){
    return(
    <article className="article-featured">
        <MainTitle />
        <img src={img} alt="article image" className="article-img"/>
        <RecentDate />
        <Paragraph />
        <SubTitle />
    </article>
    );

}

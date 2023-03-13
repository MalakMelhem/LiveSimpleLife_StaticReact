import './RecentPost.css';
import img from '../../images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg';
import RecentDate from '../RecentDate/RecentDate';
import MainTitle from '../MainTitle/MainTitle';
import Paragraph from '../Paragraph/Paragraph';
import SubTitle from '../SubTitle/SubTitle';
export default function RecentPost(){
    return(
        <article className="article-recent">
                <div className="article-recent-main">
                    <MainTitle />
                    <Paragraph />
                    <SubTitle />
                </div>
                <div className="article-recent-secondary">
                    <img src={img} alt="article image" className="article-img"/>
                    <RecentDate />
                </div>
            </article>
    );
}
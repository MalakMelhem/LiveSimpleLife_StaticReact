import MainTitle from "../MainTitle/MainTitle";
import Paragraph from "../Paragraph/Paragraph";
import img from '../../images/mike-baker-3Y366aqddJ0-unsplash.jpg';
import './AboutMe.css';

export default function AboutMe(){
    return(
        <div className="asidebar-widget">
                <MainTitle />
                <img src={img} alt="" className="widget-img"/>
                <Paragraph />
        </div>
    );

}

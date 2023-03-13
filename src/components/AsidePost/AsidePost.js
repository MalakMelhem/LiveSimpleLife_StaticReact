import './AsidePost.css';
import img from '../../images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg';
export default function AsidePost(){
    return(
        <div className="widget-recent-post">
            <h3 className="widget-recent-post-title">Keeping cooking simple</h3>
            <img src={img} alt="" className="widget-img"/>
        </div>
    );

}
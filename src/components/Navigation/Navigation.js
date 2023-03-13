import './Navigation.css'
export default function Navigation(){
    return(
    <nav>
        <ul className="nav-list">
            <li className="nav-list-item"><a className="nav-link current-page" href="index.html">Home</a></li>
            <li className="nav-list-item"><a className="nav-link" href="about-me.html">About me</a></li>
            <li className="nav-list-item"><a className="nav-link" href="recent-post.html">Recent posts</a></li>
        </ul>
    </nav>
    );
}
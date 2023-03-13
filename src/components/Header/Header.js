import HeaderLeft from '../HeaderLeft/HeaderLeft.js';
import HeaderRight from '../HeaderRight/HeaderRight.js';
import './Header.css';
export default function Header(){
    return(
        <header>
            <div className="container container-flex">
                <HeaderLeft/>
                <HeaderRight/>
            </div>
        </header>
    );
}

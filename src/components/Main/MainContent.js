import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
export default function MainContent(){
    return(
        <div className="container container-flex">
            <LeftSide />
            <RightSide />
        </div>
    );
}
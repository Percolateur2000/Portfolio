import { NavLink } from "react-router-dom";

interface CardDetail {
    cardDestination: string,
    cardName: string
}

const Card = (props:CardDetail) => {
    return (
    <NavLink className={({isActive}) => !isActive ? "cardDecoration cardAnimation cardBorder" : "cardDecoration active"}
    to={props.cardDestination}>
    <div className="w-full h-full flex items-center justify-center rounded-lg">
    {props.cardName}
    </div>
</NavLink>);
};

export default Card;
import { NavLink } from "react-router-dom";

interface CardDetail {
    cardDestination: string,
    cardName: string
}

const Card = (props:CardDetail) => {
    return (
    <NavLink className={"h-1/5 w-full bg-third text-black p-[7px] border-2 border-black rounded-lg"}
    to={props.cardDestination}>
    <div className="border-2 border-black w-full h-full flex items-center justify-center rounded-lg">
    {props.cardName}
    </div>
</NavLink>);
};

export default Card;
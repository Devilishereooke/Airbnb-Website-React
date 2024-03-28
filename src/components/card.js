import star1 from "../images/Star 1.png"
import "../styles/card.css"

export default function Card(props){
    let batchText;
    if(!props.item.openSpots){
        batchText = "SOLD OUT";
    }else if(props.item.location === "Online"){
        batchText = "ONLINE"
    }
    return (
        <div className="card">
            {batchText && <div className="card-batch">{batchText}</div> }
            <div className="card-image-box">
                <img className="card-image" src={props.item.coverImg} alt="not found" />
            </div>
            <div className="card-stats">
                <img src={star1} className="stars" alt="star"/>
                <span className="rating">{props.item.stats.rating}</span>
                <span className="stat">({props.item.stats.reviewCount}) • </span>
                <span className="country">{props.item.location}</span>
            </div>
            <div className="card-description">
                {props.item.title}
            </div>
            <div className="cost-details">
                <span>From ${props.item.price}</span> / person
            </div>
        </div>
    )
}

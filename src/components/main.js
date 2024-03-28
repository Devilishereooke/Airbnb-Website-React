import Card from "./card";
import "../styles/main.css"
// import img1 from "../images/card_images/card_image1.png"
// import img2 from "../images/card_images/card_image2.png"
// import img3 from "../images/card_images/card_image3.png"
import data from "../data";

export default function Main(){
    const cards = data.map(item => {
        return (
            <Card 
                // img = {item.coverImg}
                // stars = {item.stats.rating}
                // quantity = {item.stats.reviewCount}
                // country = {item.location}
                // description = {item.title}
                // price = {item.price}
                // openSpots = {item.openSpots}

                key = {item.id}
                item = {item}
            />
        )
    })
    return(
        <main>
            {cards}
        </main>
    )
}
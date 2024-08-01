export default function Card(props){
    return (
        <div className="card-div">
            <img src = {props.item.imageUrl} className = "card-img"/>
            <div className="card-content">
                <h3>{props.item.location}</h3>
                <a href={props.item.googleMapsUrl}>Google maps location</a>
                <h2>{props.item.title}</h2>
                <p>{props.item.startDate} - {props.item.endDate} </p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}
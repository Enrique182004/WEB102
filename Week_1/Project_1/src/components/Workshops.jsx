const Workshop = (props) => {
    return(
        <div className={'Workshop ' + props.timeColor}> 
            <h3>{props.title}</h3>
            <p><strong>Date:</strong> {props.date}</p>
            <p><strong>Time:</strong> {props.time}</p>
            <p><strong>Level:</strong> {props.level}</p>
            <p><strong>Instructor:</strong> {props.instructor}</p>
            <p>{props.description}</p>
            <button className="workshop-button">Register Now</button>
        </div>
    )
}

export default Workshop;
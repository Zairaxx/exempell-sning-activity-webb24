const Activity = ({activity,type,price,participants}) => {
    return(
    <>
        <h2>Activity</h2>
        <h3>{activity}</h3>
        <h4>Type: {type}</h4>
        <h4>Price: {price}</h4>
        <h4>Participants: {participants}</h4>
    </>
    )
}

export default Activity
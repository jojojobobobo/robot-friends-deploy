const Hello = ({greeting}) =>{

    return (
        <div>
            <h1 className = "tc">Hello There!</h1>
            <p> Welcome to Mobil App Dev</p>
            <p>{greeting}</p>
        </div>
    )
}

export default Hello;
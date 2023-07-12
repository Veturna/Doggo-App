import breeds from "./backup.json"

const DogsList = () => {
    const list = breeds.message.map(element => <li>{element}</li>)
    return (
        <>
            <ul>{list}</ul>
        </>
    )
}

export default DogsList
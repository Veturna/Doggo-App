import breeds from "./backup.json"

const breedsArray = Object.keys(breeds.message);


const DogsList = () => {
    console.log(breedsArray)
    const list = breedsArray.map((element, index) => <li key={index}>{element[0].toUpperCase() + element.slice(1, -1)}</li>)
    return (
        <>
            <ul>Lista ras:
            {list}</ul>
        </>
    )
}

export default DogsList
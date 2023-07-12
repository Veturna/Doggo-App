import React from "react";

const dogApi = "https://dog.ceo/dog-api";

export default SearchFetch
const SearchFetch = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(dogApi);
            const dog = await response.json()
            console.log(dog)
        }
    })

}
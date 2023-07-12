const SearchForm = () => {
    const [breed] = useState(" ")
    return (
        <from>
            <input type="text" value={breed} onChange={(e) => (e.target.value)}/>
        </from>
    )
}
import { useGlobalContext } from "../../context/context";

const SearchForm=()=>{
    const {query, handleSearch} = useGlobalContext();
    return (
        <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
            <h2>Search Hacker News</h2>
            <input 
                type="text"
                className="form-input"
                value={query}
                onChange={(e)=>{handleSearch(e.target.value)}}
            />
        </form>
    )
}
export default SearchForm;
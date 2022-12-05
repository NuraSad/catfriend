import React, {useState, useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from '../components/ErrorBoundry';
import "./App.css"

function App() {

    const [cats, setCats] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(Response=> { return Response.json()})
            .then(users => setCats(users));
    },[])

    function onSearchChange (event) {
        setSearchField(event.target.value)
    }

    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (!cats.length) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>CatFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList cats={filteredCats}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        ); 
    }
}

export default App;
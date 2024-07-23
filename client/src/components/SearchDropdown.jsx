import { useState } from "react";
import dummyData from "../../dummyData.json";
import colorMapping from "../colorMapping.json";
import "../styles/SearchDropdown.css";
import Tag from "./Tag";

function SearchDropdown({display}) {
    const [states, setStates] = useState([...dummyData.states]);
    const [cities, setCities] = useState([]);
    const [colleges, setColleges] = useState([]);
    const [societies, setSocieties] = useState([]);

    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedCollege, setSelectedCollege] = useState("");
    const [selectedSociety, setSelectedSociety] = useState("");

    const [searchURL, setSearchURL] = useState("");

    function handleCities(item) {
        setCities(() => {
            const newCities = [...dummyData.cities].filter(i => i.state_id === item.id);
            return newCities;
        });
        setColleges(() => {
            return [];
        });
        setSocieties(() => {
            return [];
        });
        setSelectedState(item.name);
        setSelectedCity("");
        setSelectedCollege("");
        setSelectedSociety("");
    }

    function handleColleges(item) {
        setColleges(() => {
            const newColleges = [...dummyData.colleges].filter(i => i.city_id === item.id);
            return newColleges;
        });
        setSocieties(() => {
            return [];
        });
        setSelectedCity(item.name);
        setSelectedCollege("");
        setSelectedSociety("");
    }

    function handleSocieties(item) {
        setSocieties(() => {
            const newSocieties = [...dummyData.societies].filter(i => i.college_id === item.id);
            return newSocieties;
        });
        setSelectedCollege(item.name);
        setSelectedSociety("");
    }

    function handleQuery(item) {
        setSelectedSociety(item.name);
        // setSearchURL(() => `http://localhost:5173/search?state=${selectedState}&city=${selectedCity}&college=${selectedCollege}&society=${selectedSociety}`);
    }

    // console.log(searchURL);

    return (
        <div className="search-dropdown-container" style={{display: display}}>
            <div className="states search-dropdown">
                <div className="state dropdown-headline">
                    <p className="inter">States</p>
                </div>
                <div className="state-names dropdown-values">
                    {states.map(item => {
                        return <div className={`state-name inter dropdown-value ${selectedState === item.name && 'selected-item'}`} key={item.id} onClick={() => handleCities(item)}>{item.name}</div>
                    })}
                </div>
                {/* {states.length > 5 && <p className="see-more inter">See More</p>} */}
            </div>
            <div className="cities search-dropdown">
                <div className="city dropdown-headline">
                    <p className="inter">City</p>
                </div>
                <div className="city-names dropdown-values">
                    {cities.map(item => {
                        return <div className={`city-name inter dropdown-value ${selectedCity === item.name && 'selected-item'}`} key={item.id} onClick={() => handleColleges(item)}>{item.name}</div>
                    })}
                </div>
            </div>
            <div className="colleges search-dropdown">
                <div className="college dropdown-headline">
                    <p className="inter">Colleges</p>
                </div>
                <div className="college-names dropdown-values">
                    {colleges.map(item => {
                        return <div className={`college-name inter dropdown-value ${selectedCollege === item.name && 'selected-item'}`} key={item.id} onClick={() => handleSocieties(item)}>{item.name}</div>
                    })}
                </div>
            </div>
            <div className="societies search-dropdown">
                <div className="society dropdown-headline">
                    <p className="inter">Society</p>
                </div>
                <div className="society-names dropdown-values">
                    {societies.map(item => {
                        return <div className={`society-name inter dropdown-value ${selectedSociety === item.name && 'selected-item'}`} key={item.id} onClick={() => handleQuery(item)}>
                            <p>{item.name}</p>
                            <Tag tag={item.type} color={colorMapping[[item.type]]} />
                            </div>
                    })}
                </div>
                {societies.length > 5 && <p className="see-more inter">See More</p>}
            </div>
        </div>
    );
}

export default SearchDropdown;
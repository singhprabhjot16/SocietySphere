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

    function handleCities(id) {
        setCities(() => {
            const newCities = [...dummyData.cities].filter(item => item.state_id === id);
            return newCities;
        });
        setColleges(() => {
            return [];
        })
    }

    function handleColleges(id) {
        setColleges(() => {
            const newColleges = [...dummyData.colleges].filter(item => item.city_id === id);
            return newColleges;
        });
        setSocieties(() => {
            return [];
        })
    }

    function handleSocieties(id) {
        setSocieties(() => {
            const newSocieties = [...dummyData.societies].filter(item => item.college_id === id);
            return newSocieties;
        });
    }

    return (
        <div className="search-dropdown-container" style={{display: display}}>
            <div className="states search-dropdown">
                <div className="state dropdown-headline">
                    <p className="inter">States</p>
                </div>
                <div className="state-names dropdown-values">
                    {states.map(item => {
                        return <div className="state-name inter dropdown-value" key={item.id} onMouseEnter={() => handleCities(item.id)}>{item.name}</div>
                    })}
                </div>
                {states.length > 5 && <p className="see-more inter">See More</p>}
            </div>
            <div className="cities search-dropdown">
                <div className="city dropdown-headline">
                    <p className="inter">City</p>
                </div>
                <div className="city-names dropdown-values">
                    {cities.map(item => {
                        return <div className="city-name inter dropdown-value" key={item.id} onMouseEnter={() => handleColleges(item.id)}>{item.name}</div>
                    })}
                </div>
                {cities.length > 5 && <p className="see-more inter">See More</p>}
            </div>
            <div className="colleges search-dropdown">
                <div className="college dropdown-headline">
                    <p className="inter">Colleges</p>
                </div>
                <div className="college-names dropdown-values">
                    {colleges.map(item => {
                        return <div className="college-name inter dropdown-value" key={item.id} onMouseEnter={() => handleSocieties(item.id)}>{item.name}</div>
                    })}
                </div>
                {colleges.length > 5 && <p className="see-more inter">See More</p>}
            </div>
            <div className="societies search-dropdown">
                <div className="society dropdown-headline">
                    <p className="inter">Society</p>
                </div>
                <div className="society-names dropdown-values">
                    {societies.map(item => {
                        return <div className="society-name inter dropdown-value" key={item.id}>
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
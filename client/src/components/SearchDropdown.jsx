import { useState } from "react";
import dummyData from "../../dummyData.json";
import colorMapping from "../colorMapping.json";
import "../styles/SearchDropdown.css";
import Tag from "./Tag";

function SearchDropdown() {
    const [cities, setCities] = useState([...dummyData.cities]);
    const [colleges, setColleges] = useState([]);
    const [societies, setSocieties] = useState([]);
    const [display, setDisplay] = useState("flex");

    function handleColleges(id) {
        // console.log(id);
        setColleges(() => {
            const newColleges = [...dummyData.colleges].filter(item => item.city_id === id);
            // console.log(newColleges);
            return newColleges;
        });
        setSocieties(() => {
            return [];
        })
    }

    function handleSocieties(id) {
        // console.log(id);
        setSocieties(() => {
            const newSocieties = [...dummyData.societies].filter(item => item.college_id === id);
            // console.log(newSocieties);
            return newSocieties;
        });
    }

    return (
        <div className="search-dropdown-container" style={{display: display}}>
            <div className="cities search-dropdown">
                <div className="city dropdown-headline">
                    <p className="inter">City</p>
                </div>
                <div className="city-names dropdown-values">
                    {cities.map(item => {
                        return <div className="city-name inter dropdown-value" key={item.id} onMouseEnter={() => handleColleges(item.id)}>{item.name}</div>
                    })}
                </div>
                <p className="see-more inter">See More</p>
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
                <p className="see-more inter">See More</p>
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
                <p className="see-more inter">See More</p>
            </div>
        </div>
    );
}

export default SearchDropdown;
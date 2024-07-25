import { useState } from "react";
import dummyData from "../../dummyData.json";
import colorMapping from "../colorMapping.json";
import "../styles/SearchDropdown.css";
import Tag from "./Tag";

function SearchDropdown({display}) {
    const [data, setData] = useState({
        states: [...dummyData.states],
        cities: [],
        colleges: [],
        societies: []
    });

    const [selected, setSelected] = useState({
        state: "",
        city: "",
        college: "",
        society: ""
    });

    const [searchURL, setSearchURL] = useState("");

    function handleCities(item) {
        setData((prevData) => ({
            ...prevData,
            cities: [...dummyData.cities].filter(i => i.state_id === item.id),
            colleges: [],
            societies: []
        }));
        setSelected((prevSelected) => ({
            ...prevSelected,
            state: item.name,
            city: "",
            college: "",
            society: ""
        }));
    }

    function handleColleges(item) {
        setData((prevData) => ({
            ...prevData,
            colleges: [...dummyData.colleges].filter(i => i.city_id === item.id),
            societies: []
        }));
        setSelected((prevSelected) => ({
            ...prevSelected,
            city: item.name,
            college: "",
            society: ""
        }));
    }

    function handleSocieties(item) {
        setData((prevData) => ({
            ...prevData,
            societies: [...dummyData.societies].filter(i => i.college_id === item.id)
        }));
        setSelected((prevSelected) => ({
            ...prevSelected,
            college: item.name,
            society: ""
        }));
    }

    function handleQuery(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            society: item.name
        }));
        // setSearchURL(() => `http://localhost:5173/search?state=${selected.state}&city=${selected.city}&college=${selected.college}&society=${selected.society}`);
    }

    // console.log(searchURL);

    return (
        <div className="search-dropdown-container" style={{display: display}}>
            <div className="states search-dropdown">
                <div className="state dropdown-headline">
                    <p className="inter">States</p>
                </div>
                <div className="state-names dropdown-values">
                    {data.states.map(item => {
                        return <div className={`state-name inter dropdown-value ${selected.state === item.name && 'selected-item'}`} key={item.id} onClick={() => handleCities(item)}>{item.name}</div>
                    })}
                </div>
                {/* {data.states.length > 5 && <p className="see-more inter">See More</p>} */}
            </div>
            <div className="cities search-dropdown">
                <div className="city dropdown-headline">
                    <p className="inter">City</p>
                </div>
                <div className="city-names dropdown-values">
                    {data.cities.map(item => {
                        return <div className={`city-name inter dropdown-value ${selected.city === item.name && 'selected-item'}`} key={item.id} onClick={() => handleColleges(item)}>{item.name}</div>
                    })}
                </div>
            </div>
            <div className="colleges search-dropdown">
                <div className="college dropdown-headline">
                    <p className="inter">Colleges</p>
                </div>
                <div className="college-names dropdown-values">
                    {data.colleges.map(item => {
                        return <div className={`college-name inter dropdown-value ${selected.college === item.name && 'selected-item'}`} key={item.id} onClick={() => handleSocieties(item)}>{item.name}</div>
                    })}
                </div>
            </div>
            <div className="societies search-dropdown">
                <div className="society dropdown-headline">
                    <p className="inter">Society</p>
                </div>
                <div className="society-names dropdown-values">
                    {data.societies.map(item => {
                        return <div className={`society-name inter dropdown-value ${selected.society === item.name && 'selected-item'}`} key={item.id} onClick={() => handleQuery(item)}>
                            <p>{item.name}</p>
                            <Tag tag={item.type} color={colorMapping[[item.type]]} />
                            </div>
                    })}
                </div>
                {data.societies.length > 5 && <p className="see-more inter">See More</p>}
            </div>
        </div>
    );
}

export default SearchDropdown;

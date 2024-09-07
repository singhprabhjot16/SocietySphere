import { useEffect, useState } from "react";
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

    // Use Selected IDs instead of Strings
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
    }

    useEffect(() => {
        setSearchURL(() => `http://localhost:5173/search?state=${selected.state}&city=${selected.city}&college=${selected.college}&society=${selected.society}`);
    }, [selected.society]);

    return (
        <div className="search-dropdown-super-container" style={{display: display}}>
        <div className="search-dropdown-container">
            <div className="states search-dropdown">
                <div className="state dropdown-headline">
                    <p className="poppins-regular">States</p>
                </div>
                <div className="state-names dropdown-values">
                    {data.states.map(item => {
                        return <div className={`state-name poppins-regular dropdown-value ${selected.state === item.name && 'selected-item'}`} key={item.id} onClick={() => handleCities(item)}>{item.name}</div>
                    })}
                </div>
            </div>
            <div className="cities search-dropdown">
                <div className="city dropdown-headline">
                    <p className="poppins-regular">City</p>
                </div>
                <div className="city-names dropdown-values">
                    {data.cities.map(item => {
                        return <div className={`city-name poppins-regular dropdown-value ${selected.city === item.name && 'selected-item'}`} key={item.id} onClick={() => handleColleges(item)}>{item.name}</div>
                    })}
                </div>
                {data.cities.length === 0 && <p className="length-zero poppins-regular">Select a state to view its cities</p>}
            </div>
            <div className="colleges search-dropdown">
                <div className="college dropdown-headline">
                    <p className="poppins-regular">Colleges</p>
                </div>
                <div className="college-names dropdown-values">
                    {data.colleges.map(item => {
                        return <div className={`college-name poppins-regular dropdown-value ${selected.college === item.name && 'selected-item'}`} key={item.id} onClick={() => handleSocieties(item)}>{item.name}</div>
                    })}
                </div>
                {data.colleges.length === 0 && <p className="length-zero poppins-regular">Select a city to view its colleges</p>}
            </div>
            <div className="societies search-dropdown">
                <div className="society dropdown-headline">
                    <p className="poppins-regular">Society</p>
                </div>
                <div className="society-names dropdown-values">
                    {data.societies.map(item => {
                        return <div className={`society-name poppins-regular dropdown-value ${selected.society === item.name && 'selected-item'}`} key={item.id} onClick={() => handleQuery(item)}>
                            <p>{item.name}</p>
                            <Tag tag={item.type} color={colorMapping[[item.type]]} />
                            </div>
                    })}
                </div>
                {data.societies.length === 0 && <p className="length-zero poppins-regular">Select a college to view its societies</p>}
            </div>
        </div>
        </div>
    );
}

export default SearchDropdown;

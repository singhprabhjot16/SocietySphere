import { useEffect, useState } from "react";
import dummyData from "../../../dummyData.json";
import colorMapping from "../../colorMapping.json";
import "../../styles/general/SearchDropdown.css";
import Tag from "../reusable/Tag.jsx";
import "../../utilities/AppUtils.js";
import AppUtils from "../../utilities/AppUtils.js";
import { Link } from "react-router-dom";

function SearchDropdown({ display, setSelectedSociety, setDisplay }) {
    const [data, setData] = useState({
        states: [],
        cities: [],
        colleges: [],
        societies: []
    });
    
    useEffect(() => {
        const fetchStates = async () => {
            try {
                const states = await AppUtils.getStates();
                console.log("States:", states);
                setData((prevData) => ({
                    ...prevData,
                    states: states,
                    cities: [],
                    colleges: [],
                    societies: []
                }));
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };
        fetchStates();
    }, []);

    const [selected, setSelected] = useState({
        stateId: null,
        cityId: null,
        collegeId: null,
        societyId: null
    });

    const [isNavbarVisible, setNavbarVisible] = useState(false);

    function handleCities(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            stateId: item.id,
            cityId: null,
            collegeId: null,
            societyId: null
        }));
    }

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const cities = await AppUtils.getCities(selected.stateId);
                setData((prevData) => ({
                    ...prevData,
                    cities: cities,
                    colleges: [],
                    societies: []
                }));
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
    
        if (selected.stateId) {
            fetchCities();
        }
    }, [selected.stateId]);
    

    function handleColleges(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            cityId: item.id,
            collegeId: null,
            societyId: null
        }));
    }

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const colleges = await AppUtils.getColleges(selected.stateId, selected.cityId);
                setData((prevData) => ({
                    ...prevData,
                    colleges: colleges,
                    societies: []
                }));
            } catch (error) {
                console.error('Error fetching colleges:', error);
            }
        };
    
        if (selected.cityId) {
            fetchColleges();
        }
    }, [selected.cityId]);
    

    function handleSocieties(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            collegeId: item.id,
            societyId: null
        }));
    }

    useEffect(() => {
        const fetchSocieties = async () => {
            try {
                const societies = await AppUtils.getSocieties(selected.stateId, selected.cityId, selected.collegeId);
                setData((prevData) => ({
                    ...prevData,
                    societies: societies
                }));
            } catch (error) {
                console.error('Error fetching societies:', error);
            }
        };
    
        if (selected.collegeId) {
            fetchSocieties();
        }
    }, [selected.collegeId]);
    

    function handleQuery(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            societyId: item.id
        }));
    }

    useEffect(() => {
        if (selected.societyId) {
            setSelectedSociety((prevData) => ({
                ...prevData,
                stateId: selected.stateId,
                cityId: selected.cityId,
                collegeId: selected.collegeId,
                societyId: selected.societyId
            }));
            // AppUtils.getSociety(selected.stateId, selected.cityId, selected.collegeId, selected.societyId);
            setNavbarVisible(true);
            setDisplay("none");
        }
    }, [selected.societyId, setSelectedSociety]);

    useEffect(() => {
        if (display === "none") {
            setSelected({
                stateId: null,
                cityId: null,
                collegeId: null,
                societyId: null
            });
            setData({
                ...data,
                cities: [],
                colleges: [],
                societies: []
            });
            setNavbarVisible(false);
        }
    }, [display]);

    return (
        <div className="search-dropdown-super-container" style={{ display: display }}>
            <div className="search-dropdown-container">
                {/* State Dropdown */}
                <div className="states search-dropdown">
                    <div className="state dropdown-headline">
                        <p className="poppins-regular">States</p>
                    </div>
                    <div className="state-names dropdown-values">
                        {data?.states.map(item => (
                            <div
                                className={`state-name poppins-regular dropdown-value ${selected.stateId === item.id ? 'selected-item' : ''}`}
                                key={item.id}
                                onClick={() => handleCities(item)}
                            >
                                {item.name}
                                {console.log(item)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* City Dropdown */}
                <div className="cities search-dropdown">
                    <div className="city dropdown-headline">
                        <p className="poppins-regular">City</p>
                    </div>
                    <div className="city-names dropdown-values">
                        {data?.cities.map(item => (
                            <div
                                className={`city-name poppins-regular dropdown-value ${selected.cityId === item.id ? 'selected-item' : ''}`}
                                key={item.id}
                                onClick={() => handleColleges(item)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                    {data.cities.length === 0 && <p className="length-zero poppins-regular">Select a state to view its cities</p>}
                </div>

                {/* College Dropdown */}
                <div className="colleges search-dropdown">
                    <div className="college dropdown-headline">
                        <p className="poppins-regular">Colleges</p>
                    </div>
                    <div className="college-names dropdown-values">
                        {data?.colleges.map(item => (
                            <div
                                className={`college-name poppins-regular dropdown-value ${selected.collegeId === item.id ? 'selected-item' : ''}`}
                                key={item.id}
                                onClick={() => handleSocieties(item)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                    {data.colleges.length === 0 && <p className="length-zero poppins-regular">Select a city to view its colleges</p>}
                </div>

                {/* Society Dropdown */}
                <div className="societies search-dropdown">
                    <div className="society dropdown-headline">
                        <p className="poppins-regular">Society</p>
                    </div>
                    <div className="society-names dropdown-values">
                        {data.societies.map(item => (
                            <Link to='society/about'>
                            <div
                                className={`society-name poppins-regular dropdown-value ${selected.societyId === item.id ? 'selected-item' : ''}`}
                                key={item.id}
                                onClick={() => handleQuery(item)}
                            >
                                <p>{item.name}</p>
                                <Tag tag={item.type} color={colorMapping[item.type]} />
                            </div>
                            </Link>
                        ))}
                    </div>
                    {data?.societies.length === 0 && <p className="length-zero poppins-regular">Select a college to view its societies</p>}
                </div>
            </div>
        </div>
    );
}

export default SearchDropdown;

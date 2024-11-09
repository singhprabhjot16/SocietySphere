import { useEffect, useState, useRef } from "react";
import "../../styles/general/SearchDropdown.css";
import "../../utilities/AppUtils.js";
import AppUtils from "../../utilities/AppUtils.js";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg"
import NumberLength from "../reusable/NumberLength.jsx";
import Constants from "../../constants/Constants.js";

function SearchDropdown({ display, setSelectedSociety, setDisplay }) {
    const [data, setData] = useState({
        states: [],
        cities: [],
        colleges: [],
        societies: []
    });

    const [openAccordion, setOpenAccordion] = useState({
        technical: false,
        nonTechnical: false,
        dance: false,
        literary: false,
        music: false,
        fashion: false,
        cultural: false
    });

    const [selected, setSelected] = useState({
        stateId: null,
        cityId: null,
        collegeId: null,
        societyId: null
    });

    const [isNavbarVisible, setNavbarVisible] = useState(false);

    const containerRef = useRef(null);

    function toggleAccordion(type) {
        setOpenAccordion((prevState) => ({
            ...prevState,
            [type]: !prevState[type]
        }));
    }

    function getFilteredSocieties(type) {
        if (type === "nonTechnical") {
            return data.societies.filter((society) => society.type !== "Technical");
        }
        return data.societies.filter((society) => society.type === type);
    }

    function handleCities(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            stateId: item.id,
            cityId: null,
            collegeId: null,
            societyId: null
        }));
    }

    function handleColleges(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            cityId: item.id,
            collegeId: null,
            societyId: null
        }));
    }

    function handleSocieties(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            collegeId: item.id,
            societyId: null
        }));
    }

    function handleQuery(item) {
        setSelected((prevSelected) => ({
            ...prevSelected,
            societyId: item.id
        }));
    }

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
            setOpenAccordion((prevAccordion) => ({
                ...prevAccordion,
                technical: false,
                nonTechnical: false,
                dance: false,
                literary: false,
                music: false,
                fashion: false
            }));
            setNavbarVisible(false);
        }
    }, [display]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setDisplay("none");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setDisplay]);

    return (
        <div className="search-dropdown-super-container" style={{ display: display }} ref={containerRef}>
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
                    {!AppUtils.checkEmpty(selected.stateId) && 
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
                    }
                    {AppUtils.checkEmpty(selected.stateId) && <p className="length-zero poppins-regular">Select a state to view its cities</p>}
                </div>

                {/* College Dropdown */}
                <div className="colleges search-dropdown">
                    <div className="college dropdown-headline">
                        <p className="poppins-regular">Colleges</p>
                    </div>
                    {!AppUtils.checkEmpty(selected.cityId) &&
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
                    }
                    {AppUtils.checkEmpty(selected.cityId) && <p className="length-zero poppins-regular">Select a city to view its colleges</p>}
                </div>

                {/* Society Dropdown */} 
                <div className="societies search-dropdown">
                    <div className="society dropdown-headline">
                        <p className="poppins-regular">Society</p>
                    </div>

                    {/* Technical Accordion */}
                    {AppUtils.checkEmpty(selected.collegeId) ? 
                    <p className="length-zero poppins-regular">Select a college to view its societies</p> :
                    <>
                    <div className="accordion">
                        <div className="accordion-header dropdown-value" onClick={() => toggleAccordion("technical")}>
                            <p className={`${openAccordion.technical ? "poppins-medium" : "poppins-regular"}`}>Technical</p>
                            <div className="number-of-societies">
                                <NumberLength length={getFilteredSocieties("Technical").length} />
                                <img className="expand-contract-icon" src={openAccordion.technical ? arrowUp : arrowDown} alt="" />
                            </div>
                        </div>
                        {openAccordion.technical && (
                            <div className="accordion-content">
                                {AppUtils.checkEmpty(getFilteredSocieties("Technical")) ? 
                                <p className="society-name length-zero poppins-regular">No Society Found</p> : getFilteredSocieties("Technical").map((item) => (
                                    <Link 
                                        to="society/about" key={item.id}
                                        className={`society-name poppins-regular dropdown-value ${selected.societyId === item.id ? 'selected-item' : ''}`}
                                        onClick={() => handleQuery(item)}>
                                        <p>{item.name}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Non-Technical Accordion */}
                    <div className="accordion">
                        <div className="accordion-header dropdown-value" onClick={() => toggleAccordion("nonTechnical")}>
                            <p className={`${openAccordion.nonTechnical ? "poppins-medium" : "poppins-regular"}`}>Non-Technical</p>
                            <div className="number-of-societies">
                                    <NumberLength length={getFilteredSocieties("nonTechnical").length} />
                                    <img className="expand-contract-icon" src={openAccordion.nonTechnical ? arrowUp : arrowDown} alt="" />
                            </div>
                        </div>
                        {openAccordion.nonTechnical && (
                            <div className="accordion-subcategories">
                                {["Dance", "Literary", "Music", "Fashion", "Cultural"].map((subcategory) => (
                                    <div key={subcategory} className="accordion">
                                        <div className="accordion-header dropdown-value" onClick={() => toggleAccordion(subcategory)}>
                                            <p className={`${openAccordion[subcategory] ? "poppins-medium" : "poppins-regular"}`}>{subcategory}</p>
                                            <div className="number-of-societies">
                                                <NumberLength length={getFilteredSocieties(subcategory).length} />
                                                <img className="expand-contract-icon" src={openAccordion[subcategory] ? arrowUp : arrowDown} alt="" />
                                            </div>
                                        </div>
                                        {openAccordion[subcategory] && (
                                            <div className="accordion-content">
                                                {AppUtils.checkEmpty(getFilteredSocieties(subcategory)) ? 
                                                <p className="society-name length-zero poppins-regular">No Society Found</p> : getFilteredSocieties(subcategory).map((item) => (
                                                    <Link 
                                                        to="society/about" key={item.id}
                                                        className={`society-name poppins-regular dropdown-value ${selected.societyId === item.id ? 'selected-item' : ''}`}
                                                        onClick={() => handleQuery(item)}>
                                                        <p>{item.name}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default SearchDropdown;

import React, { useState, useRef, useEffect } from 'react';

export default function Categories() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    return (
        <>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="co">
                            <h3>Quiz Generation Options</h3>
                        </div>

                        <div className="row">
                            <div className="col mb-4">
                                Please choose your preferences below to generate your personalized quiz
                            </div>
                            <div className="input-field col s12">
                                <div
                                    className={`select-wrapper ${dropdownOpen ? 'open' : ''}`}
                                    onClick={toggleDropdown}
                                    ref={dropdownRef}
                                >
                                    <input
                                        className="select-dropdown dropdown-trigger"
                                        type="text"
                                        readOnly={true}
                                        data-target="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        value={selectedOption}
                                    />
                                    <ul
                                        id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        className="dropdown-content select-dropdown"
                                        tabIndex="0"
                                    >
                                        <li className="disabled selected" id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b0" tabIndex="0"><span></span></li>
                                        <li onClick={() => handleOptionSelect('golang')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>golang</span></li>
                                        <li onClick={() => handleOptionSelect('aws')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>aws</span></li>
                                        <li onClick={() => handleOptionSelect('javascript')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>javascript</span></li>
                                        <li onClick={() => handleOptionSelect('CI/CD')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>CI/CD</span></li>
                                        <li onClick={() => handleOptionSelect('Home gardens')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>Home gardens</span></li>
                                        <li onClick={() => handleOptionSelect('coffee')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>coffee</span></li>
                                        <li onClick={() => handleOptionSelect('finger foods')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>finger foods</span></li>
                                    </ul>

                                </div>

                            </div>

                            <div className="input-field col s12">
                                <div
                                    className={`select-wrapper ${dropdownOpen ? 'open' : ''}`}
                                    onClick={toggleDropdown}
                                    ref={dropdownRef}
                                >
                                    <input
                                        className="select-dropdown dropdown-trigger"
                                        type="text"
                                        readOnly={true}
                                        data-target="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        value={selectedOption}
                                    />
                                    <ul
                                        id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        className="dropdown-content select-dropdown"
                                        tabIndex="0"
                                    >
                                        <li className="disabled selected" id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b0" tabIndex="0"><span></span></li>
                                        <li onClick={() => handleOptionSelect('novice')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>novice</span></li>
                                        <li onClick={() => handleOptionSelect('intermediate')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>intermediate</span></li>
                                        <li onClick={() => handleOptionSelect('expert')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>expert</span></li>
                                    </ul>

                                </div>

                            </div>
                            <div className="input-field col s12">
                                <div
                                    className={`select-wrapper ${dropdownOpen ? 'open' : ''}`}
                                    onClick={toggleDropdown}
                                    ref={dropdownRef}
                                >
                                    <input
                                        className="select-dropdown dropdown-trigger"
                                        type="text"
                                        readOnly={true}
                                        data-target="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        value={selectedOption}
                                    />
                                    <ul
                                        id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        className="dropdown-content select-dropdown"
                                        tabIndex="0"
                                    >
                                        <li className="disabled selected" id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b0" tabIndex="0"><span></span></li>
                                        <li onClick={() => handleOptionSelect('5')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>5</span></li>
                                        <li onClick={() => handleOptionSelect('10')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>10</span></li>
                                        <li onClick={() => handleOptionSelect('15')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>15</span></li>
                                    </ul>

                                </div>

                            </div>
                            <div className="input-field col s12">
                                <div
                                    className={`select-wrapper ${dropdownOpen ? 'open' : ''}`}
                                    onClick={toggleDropdown}
                                    ref={dropdownRef}
                                >
                                    <input
                                        className="select-dropdown dropdown-trigger"
                                        type="text"
                                        readOnly={true}
                                        data-target="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        value={selectedOption}
                                    />
                                    <ul
                                        id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b"
                                        className="dropdown-content select-dropdown"
                                        tabIndex="0"
                                    >
                                        <li className="disabled selected" id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b0" tabIndex="0"><span></span></li>
                                        <li onClick={() => handleOptionSelect('master oogway')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>master oogway</span></li>
                                        <li onClick={() => handleOptionSelect(`1940's gangster`)} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>1940's gangster</span></li>
                                        <li onClick={() => handleOptionSelect(`like i'm an 8 year old`)} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>like i'm an 8 year old</span></li>
                                        <li onClick={() => handleOptionSelect('normal')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>normal</span></li>
                                        <li onClick={() => handleOptionSelect('jedi')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>jedi</span></li>
                                        <li onClick={() => handleOptionSelect('captain jack sparrow')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>captain jack sparrow</span></li>
                                        <li onClick={() => handleOptionSelect('matthew mcconaughey')} id="select-options-604abbde-c39c-b655-069d-9eff0e1be71b1" tabIndex="0"><span>matthew mcconaughey</span></li>
                                    </ul>

                                </div>

                            </div>
                            <div class="input-field col s12">
                                <button id="btn-categories" class="btn waves-effect waves-light" onclick="submitCategories(event)">Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



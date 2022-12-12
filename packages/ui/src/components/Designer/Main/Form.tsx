import React from 'react';
import { Size } from '@pdfme/common';
import { RULER_HEIGHT } from '../../../constants';
import { useState } from "react";
import "./App.css";
import { v4 } from "uuid";
import {converter} from "./jsonToToml";




//const Form = ({ width, height }: Size) => (
const Form = () => {
    const [locationList, setLocationList] = useState([{
        id : "0",
        city: "",
        country: "",
        zip: ""
    }]);

//location patter
    const handleLocationPattern_1 = (e:any) => {
        function h1(city:string, country:string)
        {
            return city;
        }
        setLocationList([{
            id: "1",
            city: "",
            country: "",
            zip: ""
        }]);
    };

    const handleLocationPattern_2 = (e:any) => {
        setLocationList([{
            id: "2",
            city: "",
            country: "",
            zip: ""
        }]);
    };

    const handleLocationPattern_3 = (e:any) => {
        setLocationList([{
            id: "3",
            city: "",
            country: "",
            zip: "",
        }]);
    };


    const [subSectionList, setSubSectionList] = useState([
        {
            subsection: "",
            id: v4(),
            date: "",
            location: "",
            location_select: {
                locationList,
            },
            description: "",
        }
    ]);

    const [sectionList, setSectionList] = useState([
        {
            section: "",
            id: v4(),
            description: "",
            subsection: [{
                subSectionList,
            }],
        }
    ]);

    const [headerList, setHeaderList] = useState([
        {
            type: "",
            id: v4(),
            name: "",
            surname: "",
            email: "",
            scholar: "",
            github: "",
            linkedin: "",
            twitter: "",
            photo: "",
            section: {
                sectionList,
            }
        }
    ]);

    const handleHeaderChange = (e: any, index: number) => {
        const {name, value} = e.target;
        const list: any[] = [...headerList];
        list[index][name] = value;
        setHeaderList(list);
    };

    const handleSectionChange = (e: any, index:number) => {
        const {name, value} = e.target;
        const list: any[]= [...sectionList];
        list[index][name] = value;
        setSectionList(list);
    };

    const handleSubSectionChange = (e: any, index: number) => {
        const {name, value} = e.target;
        const list:any[] = [...subSectionList];
        list[index][name] = value;
        setSubSectionList(list);
    };

    const handleLocationChange = (e: any, index: number) => {
        const {name, value} = e.target;
        const list:any[] = [...locationList];
        list[index][name] = value;
        setLocationList(list);
    };

    const handleSectionRemove = (index:number) => {
        const list:any[] = [...sectionList];
        list.splice(index, 1);
        setSectionList(list);
    };

    const handleSubSectionRemove = (index:number) => {
        const list:any[] = [...subSectionList];
        list.splice(index, 1);
        setSubSectionList(list);
    };

    const handleSectionAdd = () => {
        setSectionList([...sectionList, {
            section: "",
            id: v4(),
            description: "",
            subsection: [{
                subSectionList,
            }],
        }]);
    };

    const handleSubSectionAdd = (e:any) => {
        setSubSectionList([...subSectionList, {
            subsection: "",
            id: v4(),
            date: "",
            location: "",
            location_select: {
                locationList,
            },
            description: "",
        }]);
    };

//save section data
    const saveSectionData = () => {
        console.table(sectionList);
    }

//download user data
    const downloadUserData = () => {
        converter("converted_example.toml", headerList["0"],0,"");
    }

    const input_location_1 = (singleLocation:any, e:any, index:number) => {
        handleLocationPattern_1(e);
        return <input
            name="location"
            onChange={(e) => handleLocationChange(e, index)}
            type="text"
            value={singleLocation.location}
            required
        />;
    }

    return (
        <div
            /*style={{
                position: 'absolute',
                top: -RULER_HEIGHT,
                left: -RULER_HEIGHT,
                zIndex: 100,
                background: 'rgba(158, 158, 158, 0.58)',
                width,
                height,
            }}

             */
        >
            <form className="App" autoComplete="off">
                <div className="header">
                    <h1>Document Form</h1>
                    {headerList.map((singleHeader, index) => (
                        <div className="input-group">
                            <label htmlFor="type">Type of the Document</label>
                            <input
                                name="type"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="text"
                                value={singleHeader.type}
                                required
                            />
                            <label htmlFor="name">Name</label>
                            <input
                                name="name"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="text"
                                value={singleHeader.name}
                                required
                            />
                            <label htmlFor="surname">Surname</label>
                            <input
                                name="surname"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="text"
                                value={singleHeader.surname}
                                required
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="text"
                                value={singleHeader.email}
                                required
                            />
                            <label htmlFor="url">Scholar</label>
                            <input
                                name="scholar"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="text"
                                value={singleHeader.scholar}
                            />
                            <label htmlFor="url">Linkedin</label>
                            <input
                                name="linkedin"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="text"
                                value={singleHeader.linkedin}
                            />
                            <label htmlFor="url">Twitter</label>
                            <input
                                name="twitter"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="text"
                                value={singleHeader.twitter}
                            />
                            <label htmlFor="photo">photo</label>
                            <input
                                name="photo"
                                onChange={(e) => handleHeaderChange(e, index)}
                                type="photo"
                                value={singleHeader.photo}
                            />
                        </div>
                    ))}
                </div>
                <div className="dynamic-form">
                    <h2>Section(s)</h2>
                    {sectionList.map((singleSection, index) => (
                        <div className="row-section__inner" key={index}>
                            <div className="input-group">
                                <label htmlFor="section">Name of the Section</label>
                                <input
                                    name="section"
                                    onChange={(e) => handleSectionChange(e, index)}
                                    type="text"
                                    value={singleSection.section}
                                    required
                                />
                                <label htmlFor="description">Description</label>
                                <input
                                    name="description"
                                    onChange={(e) => handleSectionChange(e, index)}
                                    type="text"
                                    value={singleSection.description}
                                    required
                                />
                                <h3>SubSection(s)</h3>
                                {subSectionList.map((singleSubSection, index) => (
                                    <div className="form-row" key={index}>
                                        <div className="input-group">
                                            <label htmlFor="subsection">Name of the SubSection</label>
                                            <input
                                                name="subsection"
                                                onChange={(e) => handleSubSectionChange(e, index)}
                                                type="text"
                                                value={singleSubSection.subsection}
                                                required
                                            />
                                            <label htmlFor="date">Date</label>
                                            <input
                                                name="date"
                                                type="text"
                                                onChange={(e) => handleSubSectionChange(e, index)}
                                                value={singleSubSection.date}
                                                required
                                            />
                                            {locationList.map((singleLocation, index) => (
                                                <div className="dropdown">
                                                    <button className="dropbtn">Location</button>
                                                    <input
                                                        name="location"
                                                        onChange={(e) => handleLocationChange(e, index)}
                                                        type="text"
                                                        value={singleLocation.city}
                                                    />
                                                    <div className="dropdown-content">
                                                        <a href="#" onClick={(e) => handleLocationPattern_1(e)}>Simple
                                                            Division</a>
                                                        <a href="#" onClick={(e) => handleLocationPattern_2(e)}>Reverse
                                                            Simple Division</a>
                                                        <a href="#" onClick={(e) => handleLocationPattern_3(e)}>Location
                                                            With Zip Code</a>
                                                    </div>
                                                </div>
                                            ))}
                                            <br/>
                                            <label htmlFor="description">Description</label>
                                            <input
                                                name="description"
                                                type="text"
                                                onChange={(e) => handleSubSectionChange(e, index)}
                                                value={singleSubSection.description}
                                                required
                                            />
                                            {subSectionList.length > 1 && (
                                                <button onClick={() => handleSubSectionRemove(index)}>-</button>
                                            )}
                                            <button onClick={() => handleSubSectionAdd(index)}>+</button>
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    {sectionList.length !== 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleSectionRemove(index)}
                                            className="remove-sec-button"
                                        >
                                            <span>Remove Section</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                    ))}
                    <button onClick={handleSectionAdd}>Add new Section</button>
                    <br/>
                    <button className="save-button" onClick={saveSectionData}>
                        Save Section Data
                    </button>
                    <button className="download-button" onClick={downloadUserData}>
                        Download User Data
                    </button>
                </div>
            </form>


        </div>
    );
}
export default Form;

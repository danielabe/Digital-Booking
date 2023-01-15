import React, { useState } from 'react';
import Select from "react-select";
import '../styles/Search.css';
import '../styles/Select.css';

import { ReactComponent as Location1 } from '../assets/icons/Location-1.svg';
import Location2 from '../assets/icons/Location-2.svg';
import Location3 from '../assets/icons/Location-3.svg';

const Search = ({ children }) => {
    const options = [
        { value: "Buenos Aires, Argentina", label: <div className='option'><img className='icon-select location3' src={Location3} height="30px" width="30px" /><img className='icon-select location2' src={Location2} height="30px" width="30px" /><div className='location'><p className='city-option'>Buenos Aires</p><span>,</span><p className='country-option'>Argentina</p></div></div> },
        { value: "Bariloche, Argentina", label: <div className='option'><img className='icon-select location3' src={Location3} height="30px" width="30px" /><img className='icon-select location2' src={Location2} height="30px" width="30px" /><div className='location'><p className='city-option'>Bariloche</p><span>,</span><p className='country-option'>Argentina</p></div></div> },
        { value: "Ushuaia, Argentina", label: <div className='option'><img className='icon-select location3' src={Location3} height="30px" width="30px" /><img className='icon-select location2' src={Location2} height="30px" width="30px" /><div className='location'><p className='city-option'>Ushuaia</p><span>,</span><p className='country-option'>Argentina</p></div></div> },
        { value: "San Martín de los Andes, Argentina", label: <div className='option'><img className='icon-select location3' src={Location3} height="30px" width="30px" /><img className='icon-select location2' src={Location2} height="30px" width="30px" /><div className='location'><p className='city-option'>San Martín de los Andes</p><span>,</span><p className='country-option'>Argentina</p></div></div> },
        { value: "San Martín de los Andes, Argentina", label: <div className='option'><img className='icon-select location3' src={Location3} height="30px" width="30px" /><img className='icon-select location2' src={Location2} height="30px" width="30px" /><div className='location'><p className='city-option'>San Martín de los Andes</p><span>,</span><p className='country-option'>Argentina</p></div></div> },
    ];

    const customStyles = {
        control: (defaultStyles) => ({
            ...defaultStyles,
            border: "none",
            boxShadow: "none",
            cursor: "pointer"
        }),
        menuList: () => ({
            display: 'flex',
            flexDirection: 'column',
            position: "relative",
            height: 'fit-content',
            maxHeight: '196px',
            margin: "0 5px",
            overflowY: 'scroll',
            scrollbar: 'smooth',
            "::-webkit-scrollbar": {
                display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        }),
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            position: "relative",
            padding: "8px 5px",
            borderBottom: '1.4px solid var(--primary-color)',
            backgroundColor: state.isActive ? "var(--primary-color)"
                : state.isFocused ? "#1dbeb480" : undefined,
            cursor: "pointer"

        }),
        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "14px",
            color: "var(--terciary-color)",
        }),
    }

    const placeholder =
        <div className='placeholder'>
            <Location1 className='icon-select' />
            ¿A dónde vamos?
        </div >;

    const [isClearable, setIsClearable] = useState(true);

    return (
        <div className="search">
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <div className='search-inputs'>
                <div>
                    <Select
                        placeholder={placeholder}
                        options={options}
                        isClearable={isClearable}
                        styles={customStyles}
                    /* styles={colourStyles} */
                    />
                </div>
                <input type="text" name="" id="" />
                <button className='btn-search'>Buscar</button>
            </div>
        </ div>
    )
}

export default Search;
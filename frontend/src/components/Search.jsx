import '../styles/Search.css';
import Select from "react-select";

import { ReactComponent as IconLinkedin } from '../assets/icons/Linkedin.svg';

const Search = ({ children }) => {
    const options = [
        { value: "blues", label: "Blues" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
    ];

    /* const placeholder = <><IconLinkedin className='icon-social-network'></IconLinkedin></>; */
    const placeholder = '¿A dónde vamos?';


    return (
        <div className="search">
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <div className='search-inputs'>
                <div>
                    <Select
                        placeholder={placeholder}
                        options={options}
                    /* styles={colourStyles} */
                    />
                </div>
                <input type="text" name="" id="" />
                <button>Buscar</button>
            </div>
        </ div>
    )
}

export default Search;
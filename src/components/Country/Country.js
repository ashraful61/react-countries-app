import React from 'react';
import './Country.css';

const Country = ({ country, handleSelectBtn, addToListBtn }) => {
    const { flags, name, region, population } = country
    
    return (
        <div className='country'>
            <div className='flag-container'><img src={flags?.png} alt="" /></div>
            <div className='country-info'>
                <p><span className='fw-bold'>Name:</span> {name?.common}</p>
                <p><span className='fw-bold'>Region:</span> {region ? region : 'No region found'}</p>
                <p><span className='fw-bold'>Population:</span> {population}</p>            
            </div>

                <button onClick={() => addToListBtn(country)} className='add-to-list-btn'>
                    <p>Add to List</p>
                </button>
                <button onClick={() => handleSelectBtn(country)} className='select-btn'>
                   <p>Select</p>
                </button>
        </div>
    );
};

export default Country;
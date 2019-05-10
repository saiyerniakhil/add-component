import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';

let address = {
    fullname : 'Sai Yerni Akhil',
    streetName: 'Ravindra Street',
    city: 'Vizag',
    stateCode: 'AP',
    pinCode: 530008
}

function Address({AddObj}) {
    return(
        <div>
            <FullName name={address.fullname}/>
            <StreetName street={address.streetName}/>
            <City cityName={address.city} state={address.stateCode} pin={address.pinCode}/>
        </div>    
    )
}


let City = ({cityName,state,pin}) => {
    return(
        <div className='city'> {`${cityName}, ${state} ${pin}`} </div>
    )
}

City.propTypes = {
    cityName : PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    pin: PropTypes.number.isRequired
}

let StreetName = ({street}) => {
    return(
        <div className='street-name'>
            {street}
        </div>    
    )
}

StreetName.propTypes = {
    street : PropTypes.string
}

let FullName = ({name}) => {
    return(
        <div className='full-name'>
            {name}
        </div>    
    )
}

FullName.propTypes = {
    name: PropTypes.string
}

ReactDOM.render(<Address/>,document.querySelector('#root'))
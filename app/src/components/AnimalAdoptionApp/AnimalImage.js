import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AnimalImage extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        const imageStyle = {
            height: '70vh',
            width: '100%',
            objectFit: 'cover'
        }

        return (
            <div>            
              <img src={this.props.img} className='' alt='Endagered Animal'  style={imageStyle} onClick={this.props.openModal}/>
              {/* <img src='/img/Rhino.png' className='' alt='Endagered Animal'  style={imageStyle}/> */}
            </div>
        );
    }
}

AnimalImage.propTypes = {
    img: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired
};

export default AnimalImage;
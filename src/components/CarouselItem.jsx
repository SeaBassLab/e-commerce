import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/statics/play-icon.png'
import plusIcon from '../assets/statics/plus-icon.png'
import removeIcon from '../assets/statics/remove-icon.png'
import { Link } from 'react-router-dom'

const CarouselItem = (props) => {
    
    const { id, cover, title, year, contentRating, duration, isList } = props
    const handleSetFavorite = () => {
        props.setFavorite({
           id, cover, title, year, contentRating, duration,
        })
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return (
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
    </div>
</div>
)
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}


export default connect(null, mapDispatchToProps)(CarouselItem)


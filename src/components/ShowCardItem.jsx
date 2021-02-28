import React from 'react'
import { connect } from 'react-redux'
import { setItemDetail, setShopping, deleteShopping } from '../actions'
import plusIcon from '../assets/statics/cesta-de-la-compra.png'
import { Link } from 'react-router-dom'
import { Col, Card, Icon, CardTitle } from 'react-materialize'

const ShowCardItem = (props) => {

    
    const { id, cover, title, year, contentRating, duration } = props

    const handleSetItemDetail = () => {
        props.setItemDetail({
            id, cover, title, year, contentRating, duration,
         })
    }
    const handleSetShopping = () => {
        props.setShopping({
           id, cover, title, year, contentRating, duration,
        })
    }

    return (
        <Col s={12} m={6} l={2}>
            <Card 
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={cover} reveal waves="light"/>}
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={title}
            >
                <Link to={`/item-detail/${id}`}>Detalles</Link>
                <button 
                onClick={handleSetShopping}
                className="btn-floating halfway-fab waves-effect waves-light">
                    <img className="circular" src={plusIcon} alt="plus image"/>
                </button>
            </Card>
        </Col>
)
}

const mapDispatchToProps = {
    setItemDetail,
    setShopping,
    deleteShopping,
}


export default connect(null, mapDispatchToProps)(ShowCardItem)


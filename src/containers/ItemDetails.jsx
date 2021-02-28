import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getItemDetail } from '../actions'



const ItemDetails = props => {
    const { id } = props.match.params

    useEffect(() => {
        props.getItemDetail(id)
    }, [])

        return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row col s12 m6 l6">
                    <img className="responsive-image fixImage" src={props.itemDetail.cover} alt={props.itemDetail.title} />
                    </div>
                    <div className="row col s12 m6 l6">
                        
                         <h1>{props.itemDetail.title}</h1>
                       
                        <table>
                            <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Price</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Alvin</td>
                                <td>Eclair</td>
                                <td>$0.87</td>
                            </tr>
                            <tr>
                                <td>Alan</td>
                                <td>Jellybean</td>
                                <td>$3.76</td>
                            </tr>
                            <tr>
                                <td>Jonathan</td>
                                <td>Lollipop</td>
                                <td>$7.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        itemDetail: state.itemDetail,
    }
}
const mapDispatchToProps = {
    getItemDetail,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
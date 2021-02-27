import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { searchRequest, cleanSearch } from '../actions'
import '../assets/styles/components/Search.scss'
import classNames from 'classnames'

const Search = (props) => {

    const { trends, originals, isHome } = props
    const handleSearch = event => {
        props.cleanSearch()
        const query = event.target.value

        if(query && query !== ' ') {
          const searchFiltered = trends.filter((item) => {
            return item.title.toLowerCase().includes(query.toLowerCase())
        }) || originals.filter((item) => {
            return item.title.toLowerCase().includes(query.toLowerCase())
        })
        searchFiltered.map((item) => {    
             props.searchRequest({...item})                     
        })  
        }  
    }
    const inputStyle = classNames('input', {
        isHome
    })
    return (
        <section className="main">
            <input 
                className={inputStyle} 
                type="text"
                placeholder="Buscar..." 
                onChange={handleSearch}
            />
        </section>
    )
}

const mapStateToProps = state => {
    return {
        trends: state.trends,
        originals: state.originals,
        search: state.search,
    }
}

const mapDispatchToProps = {
    cleanSearch,
    searchRequest
}

export default connect(mapStateToProps, mapDispatchToProps) (Search)
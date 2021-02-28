import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import ShowCardItem from '../components/ShowCardItem'
import electroImg from '../assets/statics/electrodomesticos4.jpg'
import electroImg2 from '../assets/statics/electrodomesticos.png'
import '../assets/styles/App.scss'



const Home = ({ search, trends, originals }) => {
        return (
        <header>           
           {search.length > 0 ?
                <Categories title="Resultados">
                        <div className="row">
                            {search.map(item =>
                                <ShowCardItem 
                                    key={item.id} 
                                    {...item}
                                />
                            )} 
                        </div>                                          
                </Categories> : 
            <>
                
                    <section>
                        <div className="section">
                            <div className="fixImage">
                                <img 
                                className="responsive-image"
                                src={electroImg} 
                                alt="electrodomesticos imagen" />
                            </div>               
                        </div>
                    </section>   

                    <section>
                        <div className="section">
                            <Categories className="row" title="Ofertas">
                                <div className="row">
                                    {trends.map(item =>
                                        <ShowCardItem key={item.id} {...item} />
                                    )}
                                </div>
                            </Categories>
                        </div>
                    </section>
                    <section>
                        <div className="section">
                            <div className="fixImage">
                                <img 
                                className="responsive-image"
                                src={electroImg2} 
                                alt="electrodomesticos imagen" />
                            </div>               
                        </div>
                    </section>
                    <section>
                        <div className="section">
                            <Categories title="Descubrí">
                                <div className="row">
                                    {originals.map(item =>
                                        <ShowCardItem key={item.id} {...item} />
                                    )}
                                </div>
                            </Categories>
                        </div>
                    </section>
                

            </>           
            }           
        </header>
    )
}
const mapStateToProps = state => {
    return {
        trends: state.trends,
        originals: state.originals,
        search: state.search,
    }

}

export default connect(mapStateToProps, null)(Home)
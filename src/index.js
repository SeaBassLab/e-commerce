import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './routes/App'
   
const initialState= {
        "user": {},
        "itemDetail": {},
        "myList": [],
        "search": [],
        "trends": [
            {
              "id": 2,
              "slug": "tvshow-2",
              "title": "Lavarropas",
              "type": "Scripted",
              "cover": "../src/assets/statics/lavarropas2.png"
            },
            {
              "id": 3,
              "slug": "tvshow-3",
              "title": "Heladera",
              "type": "Adventure",
              "cover": "../src/assets/statics/heladera2.png"
            },
            {
              "id": 4,
              "slug": "tvshow-4",
              "title": "Cocina",
              "type": "Comedy",
              "cover": "../src/assets/statics/cocina.png"
            },
            {
              "id": 5,
              "slug": "tvshow-5",
              "title": "Cafetera",
              "type": "Scripted",
              "cover": "../src/assets/statics/cafetera2.png"
            },
            {
              "id": 6,
              "slug": "tvshow-6",
              "title": "Aspiradora Robot",
              "type": "Scripted",
              "cover": "../src/assets/statics/aspiradora-robot2.png"
            },
            {
              "id": 7,
              "slug": "tvshow-7",
              "title": "Mix Juicer",
              "type": "Drama",
              "cover": "../src/assets/statics/mixer-juicer2.png"
            }
          ],
          "originals": [
            {
              "id": 8,
              "slug": "tvshow-8",
              "title": "Lavavajillas",
              "type": "Action",
              "cover": "../src/assets/statics/lavavajilla.png"
            },
            {
              "id": 9,
              "slug": "tvshow-9",
              "title": "Lavarropas",
              "type": "Action",
              "cover": "../src/assets/statics/lavarropas2.png"
            },
            {
              "id": 10,
              "slug": "tvshow-10",
              "title": "Heladera",
              "type": "Animation",
              "cover": "../src/assets/statics/heladera2.png"
            },
            {
              "id": 11,
              "slug": "tvshow-11",
              "title": "Cocina",
              "type": "War",
              "cover": "../src/assets/statics/cocina.png"
            },
            {
              "id": 12,
              "slug": "tvshow-12",
              "title": "Cafetera",
              "type": "Comedy",
              "cover": "../src/assets/statics/cafetera2.png"
            },
            {
              "id": 13,
              "slug": "tvshow-13",
              "title": "Aspiradora Robot",
              "type": "Drama",
              "cover": "../src/assets/statics/aspiradora-robot2.png"
            }
          ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancers())

ReactDom.render(
    <Provider store={store}>
        <App />   
    </Provider>, 
    document.getElementById('app')
)
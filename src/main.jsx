import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger, featuring, number } from './middlewares/index.js'
import './index.css'
import 'antd/dist/reset.css';

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring, number)
);

const store = createStore(pokemonsReducer, composedEnhancers);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

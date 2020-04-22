import React from 'react'
import ReactDOM from 'react-dom'
import TagManager from 'react-gtm-module'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import reducers from './store/reducers/index'
import App from 'components/RootComponent/App'
import 'normalize.css'
import './index.css'

const history = createHistory()

// connect store with redux dev tools
const store = createStore(reducers, composeWithDevTools(
	applyMiddleware(reduxThunk, routerMiddleware(history))
))

const tagManagerArgs = {
	gtmId: 'GTM-PN7FFB6'
}

TagManager.initialize(tagManagerArgs)

const root = window.document.querySelector('#root')
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ConnectedRouter history={history}>
				<App/>
			</ConnectedRouter>
		</BrowserRouter>
	</Provider>,
	root
)

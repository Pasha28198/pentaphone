import React, {Component} from 'react'
import routes from 'src/routes/index'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import ReactPixel from 'react-facebook-pixel'

// Local components
import 'semantic-ui-css/semantic.min.css'
import Header from 'containers/LayoutBox/Header'
import NavigationPanel from 'containers/LayoutBox/NavigationPanel'
import FullPageSpinner from 'src/containers/LayoutBox/FullPageSpinner/index'
import PrivateRouter from 'components/RootComponent/protectedRouter'
import SideBar from 'src/containers/LayoutBox/SideBar/index'
import Footer from 'containers/LayoutBox/Footer'

// decorator components
import styles from './styles.scss'

class App extends Component {
	componentWillMount () {
		ReactPixel.init('2390215937872085')
		ReactPixel.pageView()
	}
	render () {
		return (
			<div className={styles.wrapperApp}>
				<Header />
				{/* <SideBar/> */}
				<div className={styles.mainWrapper}>
					<main>
						<Switch>
							<For each='route' index="index" of={routes}>
								<Choose>
									<When condition={route.auth}>
										<PrivateRouter
											{...{
												path: route.path,
												component: route.component,
												exact: route.exact
											}}
											key={index}
										/>
									</When>
									<Otherwise>
										<Route
											{...{
												path: route.path,
												component: route.component,
												exact: route.exact
											}}
											key={index}
										/>
									</Otherwise>
								</Choose>
							</For>
						</Switch>
					</main>
				</div>
				{/* <NavigationPanel /> */}
				<FullPageSpinner/>
				<Footer/>
			</div>
		)
	}
}

App.propTypes = {
	location: PropTypes.object
}

export default App

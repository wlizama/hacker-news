import React from 'react'
import { Tabs, Tab } from '../../components/Tabs'
import AllNews from './AllNews'
import FavsNews from './FavsNews'

const Home = () => {
	return (
		<section className='Home'>
			<Tabs>
				<Tab label="All">
					<AllNews />
				</Tab>
				<Tab label="My faves">
					<FavsNews />
				</Tab>
			</Tabs>
		</section>
	)
}

export default Home
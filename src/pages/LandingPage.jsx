import React from 'react'
// import { Hero, AfterHero} from '../components/index'

import { Hero, AfterHero, Plans} from '../components'
const LandingPage = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<AfterHero />
			<Plans/>
		</div>
		
	)
}

export default LandingPage
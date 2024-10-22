import React from 'react'
// import { Hero, AfterHero} from '../components/index'

import { Hero, AfterHero, Plans,FooterBase, DefaultAccordion} from '../components'
const LandingPage = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<AfterHero />
			<Plans/>
			<DefaultAccordion/>
			<FooterBase/>
		</div>
	)
}

export default LandingPage
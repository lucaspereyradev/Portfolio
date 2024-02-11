import devcoin_screen from '@/assets/devcoin_screen.png'
import weatherme_screen from '@/assets/weatherme_screen.png'
import apga_screen from '@/assets/apga_screen.png'
import portfolio_screen from '@/assets/portfolio_screen.png'

export const projectsData = [
	{
		id: 1,
		name: "devcoin",
		title: 'DevCoin',
		property: 'Co-creator Project',
		description: 'I worked as a full-stack developer on this bootcamp project for 1 month. Users can give public feedback to companies.',
		tags: ['React', 'Node', 'MySql', 'Tailwind', 'API'],
		imageUrl: devcoin_screen,
	},
	{
		id: 2,
		name: "weatherme",
		title: 'WeatherMe',
		property: 'Co-creator Project',
		description: 'I worked on a friends project for 1 month. I was the front-end developer. It has features like searching.',
		tags: ['React', 'Tailwind', 'API'],
		imageUrl: weatherme_screen,
	},
	{
		id: 3,
		name: "apgasoluciones",
		title: 'APGA Soluciones',
		property: 'SPA Website',
		description: 'I worked on a friends project for 1 month. I was the front-end developer. It has features like searching.',
		tags: ['React', 'Tailwind'],
		imageUrl: apga_screen,
	},
	{
		id: 4,
		name: "portfolio",
		title: 'Portfolio',
		property: 'Creator - Personal project',
		description: 'My personal and profesional portfolio.',
		tags: ['Next 13', 'TypeScript', 'Tailwind'],
		imageUrl: portfolio_screen,
	},
]
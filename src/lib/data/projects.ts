import MactaBeautyImage from '$lib/assets/images/projects/mactabeauty.webp';
import ActyCareerPageImage from '$lib/assets/images/projects/acty_career.webp';
import DeleitImage from '$lib/assets/images/projects/deleit.webp';
import UrlShorteningImage from '$lib/assets/images/projects/url_shortener.webp';
import SalomeTKImage from '$lib/assets/images/projects/salometk.webp';
import TeliaTVImage from '$lib/assets/images/projects/teliatv.webp';
import KapitaliGruppImage from '$lib/assets/images/projects/kapitaligrupp.webp';
import ZentriaImage from '$lib/assets/images/projects/zentria.webp';
import JausteenusImage from '$lib/assets/images/projects/jausteenus.webp';
import GoToAndPlayImage from '$lib/assets/images/projects/gotoandplay.webp';

export interface Project {
	id: string;
	title: string;
	description: string;
	shortDescription?: string;
	image?: string | object; // Allow string paths or imported image objects
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
	company?: {
		name: string;
		url?: string;
	};
	featured: boolean;
	status: 'completed' | 'ongoing' | 'planning';
	year: string;
}

export const projects: Project[] = [
	{
		id: 'mactabeauty',
		title: 'MactaBeauty',
		description:
			'Magento 2 E-commerce site of one of the biggest beauty related products selling company in Estonia. Magento 2 Frontend and custom modules & plugins.',
		shortDescription: 'Modern E-Commerce site with custom modules made in Magento 2.',
		image: MactaBeautyImage,
		technologies: ['Magento 2', 'SEO', 'Montonio', 'PHP'],
		liveUrl: 'https://www.mactabeauty.com/',
		githubUrl: undefined,
		company: {
			name: 'Acty OÜ',
			url: 'https://www.acty.ee/'
		},
		featured: true,
		status: 'completed',
		year: '2022'
	},
	{
		id: 'acty-career',
		title: 'Acty Career Page',
		description:
			"Customized Acty's Career page that feautres custom open job positions and forms. Made in Wordpress using Divi builder. Simple but very elegant.",
		shortDescription: 'Modern career page with custom job listings and forms.',
		image: ActyCareerPageImage,
		technologies: ['Wordpress', 'Elementor', 'Divi'],
		liveUrl: 'https://www.acty.ee/career/',
		githubUrl: undefined,
		company: {
			name: 'Acty OÜ',
			url: 'https://www.acty.ee/'
		},
		featured: false,
		status: 'completed',
		year: '2021'
	},
	{
		id: 'deleit',
		title: 'Deleit',
		description:
			'Construction company website that features a portfolio, services, etc. Made in Wordpress using Elementor, a very simple page with full page cache.',
		shortDescription: 'Construction company website with portfolio and services.',
		image: DeleitImage,
		technologies: ['Wordpress', 'Elementor'],
		liveUrl: 'http://deleit.eu/',
		githubUrl: undefined,
		featured: true,
		company: {
			name: 'Andify OÜ',
			url: 'https://www.linkedin.com/company/andify-o%C3%BC/'
		},
		status: 'completed',
		year: '2021'
	},
	{
		id: 'url-shortening',
		title: 'URL Shortening',
		description:
			'This was a Frontend Mentor challenge to create a URL Shortening API landing page. Semantic HTML, pure CSS & pure Javascript. Made with love.',
		shortDescription: 'Modern URL shortening landing page with semantic HTML and pure CSS.',
		image: UrlShorteningImage,
		technologies: ['Semantic HTML', 'CSS', 'JavaScript'],
		liveUrl: 'https://jjaks.github.io/frontendmentor-url-shortening/src/',
		githubUrl: 'https://github.com/JJaks/frontendmentor-url-shortening',
		featured: false,
		status: 'completed',
		year: '2020'
	},
	{
		id: 'salome-tk',
		title: 'Salome TK',
		description:
			'One of the first big projects I have made. An Extensive order center written in TypeScript using the Aurelia webpack, custom back and front-end.',
		shortDescription: 'Written in TypeScript using the Aurelia webpack, custom back and front-end.',
		image: SalomeTKImage,
		technologies: ['Aurelia', 'TypeScript', 'Webpack'],
		liveUrl: 'https://tk.salome.ee/user/login',
		githubUrl: undefined,
		featured: true,
		company: {
			name: 'nuhvel.solutions',
			url: 'https://www.nuhvel.ee/'
		},
		status: 'completed',
		year: '2021'
	},
	{
		id: 'teliatv',
		title: 'TeliaTV',
		description:
			'The leading TV service in Estonia, I have worked on the frontend and backend of the web, mobile and TV applications. The web application is written in React, the mobile application is written in React Native and the TV application is written in Kotlin.',
		shortDescription: 'Leading TV service in Estonia with web, mobile, and TV applications.',
		image: TeliaTVImage,
		technologies: [
			'React',
			'React Native',
			'Kotlin',
			'TypeScript',
			'Inferno',
			'Webpack',
			'Node.js',
			'Swift'
		],
		liveUrl: 'https://teliatv.ee',
		githubUrl: undefined,
		company: {
			name: 'Telia',
			url: 'https://www.telia.ee/'
		},
		featured: true,
		status: 'ongoing',
		year: '2025'
	},
	{
		id: 'zentria',
		title: 'Zentria',
		description:
			'Custom site made using the NextJS framework, scss, Javascript. Implementing HTML5 UP design. Prototype.',
		shortDescription:
			'Custom site made using the NextJS framework, scss, Javascript. Implementing HTML5 UP design. Prototype.',
		image: ZentriaImage,
		technologies: ['NextJS', 'SCSS', 'JavaScript'],
		liveUrl: 'https://nextjs-zentria-a4z1aczhk.vercel.app/',
		githubUrl: undefined,
		featured: false,
		status: 'completed',
		year: '2020'
	},
	{
		id: 'kapitaligrupp',
		title: 'KapitaliGrupp',
		description:
			'Real estate site that uses REST API to automatically get new listings from kv.ee, Wordpress, Elementor, custom functions made from scratch.',
		shortDescription:
			'Real estate site with automatic listings from kv.ee using REST API. Wordpress and Elementor.',
		image: KapitaliGruppImage,
		technologies: ['Wordpress', 'Elementor', 'REST API'],
		liveUrl: 'https://kapitaligrupp.ee/',
		githubUrl: undefined,
		company: {
			name: 'Andify OÜ',
			url: 'https://www.linkedin.com/company/andify-o%C3%BC/'
		},
		featured: false,
		status: 'completed',
		year: '2021'
	},
	{
		id: 'jausteenus',
		title: 'Jausteenus',
		description:
			"Simple printing labels firm's site that was made using Wordpress, Elementor and shows off many custom functions made from scratch.",
		shortDescription: "Simple printing labels firm's site with custom functions made from scratch.",
		image: JausteenusImage,
		technologies: ['Wordpress', 'Elementor'],
		liveUrl: 'https://jausteenus.ee/',
		githubUrl: undefined,
		company: {
			name: 'Andify OÜ',
			url: 'https://www.linkedin.com/company/andify-o%C3%BC/'
		},
		featured: false,
		status: 'completed',
		year: '2020'
	},
	{
		id: 'gotoandplay',
		title: 'GoToAndPlay',
		description:
			'This was a homework type of assignment to apply for a job at gotoAndPlay. Made with Next.JS, TypeScript, HMTL5, CSS, tsparticles and magic.',
		shortDescription:
			'Homework assignment for gotoAndPlay job application using Next.JS, TypeScript, HTML5, CSS.',
		image: GoToAndPlayImage,
		technologies: ['NextJS', 'TypeScript', 'HTML5', 'CSS', 'tsparticles'],
		liveUrl: 'https://gotoandplay-sim.vercel.app/',
		githubUrl: 'https://github.com/JJaks/play-crn',
		featured: false,
		status: 'completed',
		year: '2021'
	}
];

export const getFeaturedProjects = (): Project[] => {
	return projects
		.filter((project) => project.featured)
		.sort((a, b) => parseInt(b.year) - parseInt(a.year));
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
	return projects
		.filter((project) => project.status === status)
		.sort((a, b) => parseInt(b.year) - parseInt(a.year));
};

export const getProjectsByYear = (year: string): Project[] => {
	return projects.filter((project) => project.year === year);
};

export const getAllProjects = (): Project[] => {
	return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
};

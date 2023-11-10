import ReactImg from "public/assets/skills/react.png";
import NextJS from "public/assets/skills/nextjs.png";
import Javascript from "public/assets/skills/javascript.png";
import Typescript from "public/assets/skills/typescript.png";
import Node from "public/assets/skills/node.png";
import Git from "public/assets/skills/git.png";
import Docker from "public/assets/skills/docker.png";
import Tailwind from "public/assets/skills/tailwind.png";
//
import WhatsappClone from "public/assets/projects/whatsapp-web-clone/1.png";
import Easymunch from "public/assets/projects/easy-munch/1.png";
import ReactDashboard from "public/assets/projects/react-dashboard/1.png";
import MovieApp from "public/assets/projects/react-movie-app/1.png";

export const skills = [
	{
		name: "React JS",
		image: ReactImg,
	},
	{
		name: "Next JS",
		image: NextJS,
	},
	{
		name: "Tailwind CSS",
		image: Tailwind,
	},
	{
		name: "Typescript",
		image: Typescript,
	},
	{
		name: "Javascript",
		image: Javascript,
	},
	{
		name: "Node JS",
		image: Node,
	},
	{
		name: "Git",
		image: Git,
	},
	{
		name: "Docker",
		image: Docker,
	},
];

export const projects = [
	{
		name: "Whatsapp Web Clone",
		image: WhatsappClone,
		projectUrl: "/projects/whatsapp-clone",
		tech: "Next JS",
	},
	{
		name: "Easymunch",
		image: Easymunch,
		projectUrl: "/projects/easy-munch",
		tech: "React JS",
	},
	{
		name: "React Dashboard",
		image: ReactDashboard,
		projectUrl: "/projects/react-dashboard",
		tech: "React JS",
	},
	{
		name: "React Movie App",
		image: MovieApp,
		projectUrl: "/projects/movie-app",
		tech: "React JS",
	},
];

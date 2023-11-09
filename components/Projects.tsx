import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Side Projects</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Property Finder"
						backgroundImg={propertyImg}
						projectUrl="/projects/property"
						tech="React JS"
					/>
					<ProjectItem
						title="Crypto App"
						backgroundImg={cryptoImg}
						projectUrl="/projects/crypto"
						tech="React JS"
					/>
					<ProjectItem
						title="Netflix App"
						backgroundImg={netflixImg}
						projectUrl="/projects/netflix"
						tech="React JS"
					/>
					<ProjectItem
						title="Twitch UI"
						backgroundImg={twitchImg}
						projectUrl="/projects/twitch"
						tech="Next JS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;

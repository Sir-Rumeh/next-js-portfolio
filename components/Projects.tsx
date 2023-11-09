import React from "react";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import ProjectItem from "./ProjectItem";
import { projects } from "../utils/constants";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-primary">Side Projects</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project) => {
						return (
							<div key={project.name}>
								<ProjectItem
									title={project.name}
									backgroundImg={project.image}
									projectUrl={project.projectUrl}
									tech={project.tech}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;

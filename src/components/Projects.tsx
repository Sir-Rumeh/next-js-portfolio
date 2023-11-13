import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../utils/constants";

const Projects = () => {
	return (
		<div id="projects" className="w-full lg:h-screen">
			<div className="max-w-[1240px] mx-auto px-2 py-16" data-aos="fade-right" data-aos-duration="1000">
				<p className="text-xl tracking-widest uppercase text-primary">Side Projects</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project) => {
						return (
							<div key={project.name} data-aos="zoom-in" data-aos-duration="1000">
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

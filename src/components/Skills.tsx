import Image from "next/image";
import React from "react";
import { skills } from "../utils/constants";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<div data-aos="fade-down-right" data-aos-duration="1200">
					<p className="text-xl tracking-widest uppercase text-primary">Skills</p>
					<h2 className="py-4">Some Technologies I Use</h2>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-2">
						{skills.map((skill) => {
							return (
								<div
									key={skill.name}
									className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
								>
									<div className="grid grid-cols-2 gap-4 justify-center items-center">
										<div className="m-auto">
											<Image src={skill.image} width="64px" height="64px" alt="/" />
										</div>
										<div className="flex flex-col items-center justify-center">
											<h3 className="text-lg">{skill.name}</h3>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

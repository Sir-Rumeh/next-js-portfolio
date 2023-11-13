import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "public/assets/about.jpeg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
					<p className="uppercase text-xl tracking-widest text-primary">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
						Enthusiastic frontend developer who enjoys to develop fast loading and responsive websites
						that meets customer requirements and achieve business objectives using Typescript, React
						and other modern technologies while leveraging my experience contributing to a team of
						software engineers in a Scrum based Agile delivery working environment.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						I specialize in building mobile responsive front-end UI applications that connect with
						API’s and other backend technologies. I’m passionate about learning new technologies and
						understand there is more than one way to accomplish a task. Though I am most proficient in
						building front-end applications using HTML, CSS, Javascript, and React, I am a quick
						learner and can pick up new tech stacks as needed. I believe that being a great developer
						is not using one specific language, but choosing the best tool for the job.
					</p>
					<div className="w-[50%]">
						<Link href="/#projects">
							<p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
								Check out some of my latest projects.
							</p>
						</Link>
					</div>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<div data-aos="fade-left" data-aos-duration="1000">
						<Image src={AboutImg} className="rounded-xl " alt="/" height={800} loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

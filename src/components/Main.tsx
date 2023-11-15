import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center mx-auto flex">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<h1 className="py-4 text-gray-700">
							Hi, I&#39;m <span className="text-primary"> Nosarumen</span>
						</h1>
						<h1 className="py-2 text-gray-700">A Front-End Developer</h1>
						<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg">
							I&#39;m focused on building stunning responsive front-end web applications
							integrating back-end technologies.
						</p>
						<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg">
							I also write backend code using node.js
						</p>
					</div>

					{/*  */}
					<div data-aos="fade-right" data-aos-duration="1000">
						<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
							<a
								href="https://www.linkedin.com/in/nosarumen-imuentinyan/"
								target="_blank"
								rel="noreferrer"
							>
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  hover:bg-secondary duration-300">
									<FaLinkedinIn title="Linkedin" />
								</div>
							</a>
							<a href="https://github.com/Sir-Rumeh/" target="_blank" rel="noreferrer">
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
									<FaGithub title="GitHub" />
								</div>
							</a>
							<Link href="/#contact">
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
									<AiOutlineMail title="Contact" />
								</div>
							</Link>
							<Link href="/resume">
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
									<BsFillPersonLinesFill title="Resume" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

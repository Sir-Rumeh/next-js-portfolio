import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<h1 className="py-4 text-gray-700">
						Hi, I&#39;m <span className="text-primary"> Nosarumen</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg">
						I’m focused on building responsive front-end web applications integrating back-end
						technologies.
					</p>
					<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg">
						I also do a little bit of backend using node.js
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/nosarumen-imuentinyan/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  hover:bg-lightPrimary duration-300">
								<FaLinkedinIn title="Linkedin" />
							</div>
						</a>
						<a href="https://github.com/Sir-Rumeh/" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-lightPrimary duration-300">
								<FaGithub title="GitHub" />
							</div>
						</a>
						<Link href="/#contact">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-lightPrimary duration-300">
								<AiOutlineMail title="Contact" />
							</div>
						</Link>
						<Link href="/resume">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-lightPrimary duration-300">
								<BsFillPersonLinesFill title="Resume" />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

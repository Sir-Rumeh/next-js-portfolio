import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | Resume</title>
				<meta
					name="description"
					content="I’m a front-end web developer specialized in usinf react, nextjs and typescript to build exceptional user interface."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>

			<div className="max-w-[940px] mx-auto p-2 pt-[120px]">
				<h2 className="text-center">Resume</h2>
				<div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
					<h2 className="text-center">Nosarumen Imuentinyan</h2>
					<div className="flex">
						<a
							href="https://www.linkedin.com/in/nosarumen-imuentinyan/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedinIn title="Linkedin" size={20} style={{ marginRight: "1rem" }} />
						</a>
						<a href="https://github.com/Sir-Rumeh/" target="_blank" rel="noreferrer">
							<FaGithub title="GitHub" size={20} style={{ marginRight: "1rem" }} />
						</a>
					</div>
				</div>
				<div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
					<div className="hidden sm:block">
						<p>
							Proven Leadership <span className="px-1">|</span> Web Development{" "}
							<span className="px-1">|</span> Complex Problem Solving
						</p>
					</div>
					<div className="block sm:hidden">
						<p>Proven Leadership</p>
						<p className="py-2">Web Development</p>
						<p>Complex Problem Solving</p>
					</div>
				</div>
				<p className="text-lg">
					Analytical, innovative, and motivated web development professional with experience in customer
					service, team leadership, and organizational effectiveness in fast-paced and challenging
					environments. Adept at developing strategies and driving streamlined operations. Diverse
					analytical skills, team collaboration, and relationship building. Consummate professional, and
					motivated leader, with solid interpersonal abilities and complex problem-solving skills.
					Effective and proven track record of critical thinking, idea generation, and optimizing
					efficiencies.
				</p>
				<div className="mt-4">
					<Link href="/#projects">
						<p className="underline cursor-pointer text-lg hover:text-primary">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default resume;

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "public/assets/contact.jpg";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tracking-widest uppercase text-primary">Contact</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full ">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={ContactImg}
									alt="/"
									loading="lazy"
								/>
							</div>
							<div>
								<h2 className="py-2">Nosarumen Imuentinyan</h2>
								<p className="text-xl mt-2">Front-End Developer</p>
								<p className="py-4 text-lg">
									I am available for freelance or full-time positions. Contact me and
									let&apos;s talk.
								</p>
							</div>
							<div>
								<div className="flex justify-between items-center mt-8">
									<p className="uppercase text-lg">Connect With Me</p>
									<AiOutlineArrowRight className="text-xl" />
								</div>
								<div className="flex items-center justify-between py-4">
									<a
										href="https://www.linkedin.com/in/nosarumen-imuentinyan/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
											<FaLinkedinIn title="Linkedin" />
										</div>
									</a>
									<a href="https://github.com/Sir-Rumeh/" target="_blank" rel="noreferrer">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
											<FaGithub title="GitHub" />
										</div>
									</a>

									<Link href="/resume">
										<a>
											<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
												<BsFillPersonLinesFill title="Resume" />
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form>
								<div className="flex flex-col py-2">
									<label htmlFor="name" className="uppercase text-sm py-2 text-primary">
										Name
									</label>
									<input
										id="name"
										className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-primary"
										type="text"
										name="name"
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="flex flex-col py-2">
									<label htmlFor="email" className="uppercase text-sm py-2 text-primary">
										Email
									</label>
									<input
										id="email"
										className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-primary"
										type="email"
										name="email"
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="flex flex-col py-2">
									<label htmlFor="subject" className="uppercase text-sm py-2 text-primary">
										Subject
									</label>
									<input
										id="subject"
										className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-primary"
										type="text"
										name="subject"
										onChange={(e) => setSubject(e.target.value)}
									/>
								</div>
								<div className="flex flex-col py-2">
									<label htmlFor="message" className="uppercase text-sm py-2 text-primary">
										Message
									</label>
									<textarea
										id="message"
										className="border-2 rounded-lg p-3 border-gray-300 resize-none focus:outline-primary"
										rows={10}
										name="message"
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<a>
							<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
								<HiOutlineChevronDoubleUp className="text-primary" size={30} />
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;

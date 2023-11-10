import WhatsappImg from "public/assets/projects/whatsapp-web-clone/1.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const WhatsappClone = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | Whatsapp Web Clone Project</title>
				<meta
					name="description"
					content="This is a clone of the whatsapp web application featuring some of its amazing functionalities such as:
					1. User Authentication.
					2. Real-time Messaging.
					3. Voice / Audio Messaging
					4. Voice / Video Call.
					5. File Sharing.
					6. Responsive Design.
					7. User Online / Offline Status.
					8. AI Chat Bot."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="w-full overflow-x-hidden">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<Image
						className="absolute z-1"
						layout="fill"
						objectFit="cover"
						src={WhatsappImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">Whatsapp Clone App</h2>
						<h3>Next JS / Tailwind CSS / Node JS & Express / PostgreSQL</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							I built this fullstack app to demonstrate my knowledge working with Next JS and
							creating API endpoints using Node JS and Express framework.
						</p>
						<p className="text-lg mt-2">
							This app was built using Next JS for the frontend and Node JS with Express for the
							backend using PostgreSQL for the database manipulted by Pisma ORM tool.
						</p>
						<p className="text-lg mt-2">
							This application manages its own simple user authentication and management system.
							Users are able to create new accounts using a username of their choice and can then
							sign in using that username.
						</p>
						<p className="text-lg mt-2">
							The frontend is hosted on vercel and the backend using sockets is hosted on railway.
						</p>
						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
							<li>User Authentication</li>
							<li>Real-time Messaging and Notifications Using WS Socket Library</li>
							<li>Text and Voice / Audio Messaging</li>
							<li>Image File Sharing</li>
							<li>Voice / Video Call with Zegocloud</li>
							<li>Responsive Design</li>
							<li>User Online / Offline Status</li>
							<li>
								AI Chat Bot using Eden AI-powered assistant ( utilizes OpenAI’s GPT-3 model )
							</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* HERE */}
							<a
								href="https://github.com/Sir-Rumeh/whatsapp-web-clone"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github Code</button>
							</a>
							<a
								href="https://whatsapp-web-clone-client.vercel.app"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a>
							<a
								href="https://www.linkedin.com/posts/nosarumen-imuentinyan_whatsapp-nextjs-nodejs-activity-7124746594284974081-I6Ex?utm_source=share&utm_medium=member_desktop"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Video Demo</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Next JS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tailwind CSS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Javascript
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Node JS & Express
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> PostgreSQL Database
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Prisma ORM
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> WS library
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Zegocloud
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Eden AI Assistant
									</p>
								</div>
							</div>
						</div>
					</div>
					<Link href="/#projects">
						<p className="underline cursor-pointer text-lg hover:text-primary">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default WhatsappClone;

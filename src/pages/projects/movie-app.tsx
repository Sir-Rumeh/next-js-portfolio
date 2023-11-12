import MovieAppImg from "public/assets/projects/react-movie-app/movie.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const MovieApp = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | Movie App Project</title>
				<meta
					name="description"
					content="A movie app created with create react app using the movie database API"
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
						src={MovieAppImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">Movie App</h2>
						<h3>React JS / Tailwind CSS / TMDB API</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							This is a movie app created with create react app using the movie database API for
							fetching movies and movie details so UI data is dynamic and constantly updated with
							latest movies
						</p>
						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
							<li>Paginated Data Fetching</li>
							<li>Movie Search</li>
							<li>User Rating</li>
							<li>Mobile Responsiveness</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* HERE */}
							<a
								href="https://github.com/Sir-Rumeh/react-movie-app-typescript-version"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github Code</button>
							</a>
							<a href="https://react-movie-site.netlify.app" target="_blank" rel="noreferrer">
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> React JS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tailwind CSS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> TMDB API
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

export default MovieApp;

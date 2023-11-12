import React from "react";

interface ExperienceDetails {
	experienceDetails: {
		companyName: string;
		role: string;
		duration: string;
		activities: string[];
	};
}

const Details: React.FC<ExperienceDetails> = ({ experienceDetails }) => {
	return (
		<div data-aos="fade-up" data-aos-duration="1000">
			<div className="flex items-center gap-x-3">
				<h3 className="">{`${experienceDetails.role}`}</h3>
				<h3 className="text-primary">{`@${experienceDetails.companyName}`}</h3>
			</div>
			<h4 className="mt-1">{experienceDetails.duration}</h4>

			<ul className="">
				{experienceDetails.activities.map((activity) => {
					return (
						<li key={activity} className="mt-4 text-lg cursor-text flex items-start gap-x-3">
							<span className="scale-150">&#x2022;</span>
							{activity}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Details;

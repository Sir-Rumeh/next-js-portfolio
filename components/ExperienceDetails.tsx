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
		<div>
			<span className="flex items-center gap-x-3">
				<h3 className="">{`${experienceDetails.role}`}</h3>
				<h3 className="text-primary">{`@${experienceDetails.companyName}`}</h3>
			</span>
		</div>
	);
};

export default Details;

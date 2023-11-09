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
	return <div>{experienceDetails.companyName}</div>;
};

export default Details;

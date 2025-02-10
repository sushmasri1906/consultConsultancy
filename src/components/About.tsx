import React from "react";
import Qualifications from "./Qualifications";
import Experience from "./Experience";
import History from "./History";
import ContactInfo from "./ContactInfo";
import BgAbout from "./BgAbout";

function About() {
	return (
		<>
			<BgAbout />
			<Qualifications />
			<Experience />
			<History />
			<ContactInfo />
		</>
	);
}

export default About;

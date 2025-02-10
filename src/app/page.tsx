import Attorney from "@/components/Attorny";
import ContactInfo from "@/components/ContactInfo";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/Practices";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import React from "react";

function page() {
	return (
		<>
			<Hero />
			<Attorney />
			<PracticeAreas />
			<WhyUs />
			<ContactInfo />
			<Testimonials />
		</>
	);
}

export default page;

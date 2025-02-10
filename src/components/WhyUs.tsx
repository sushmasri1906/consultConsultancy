"use client";

import {
	FaAward,
	FaBalanceScale,
	FaHeadset,
	FaUsers,
	FaGavel,
	FaBriefcase,
	FaDollarSign,
} from "react-icons/fa";

export default function WhyUs() {
	const reasons = [
		{
			title: "Excellent Track Record",
			icon: <FaAward />,
			description:
				"With a history of success, we have consistently delivered favorable outcomes for our clients.",
		},
		{
			title: "Transparent Fees",
			icon: <FaBalanceScale />,
			description:
				"We believe in clarity—no hidden costs, just fair and honest pricing for legal services.",
		},
		{
			title: "Unparalleled Customer Service",
			icon: <FaHeadset />,
			description:
				"Our dedicated team is always ready to provide personalized support and expert legal guidance.",
		},
	];

	const stats = [
		{ label: "Client Consultations", value: "2000+", icon: <FaUsers /> },
		{ label: "Successful Cases", value: "93%", icon: <FaGavel /> },
		{ label: "Professional Attorneys", value: "40+", icon: <FaBriefcase /> },
		{ label: "Recovered Cost", value: "20M+", icon: <FaDollarSign /> },
	];

	return (
		<section className="max-w-6xl mx-auto px-6 py-16">
			<h2 className="text-4xl font-bold text-gray-900 text-center">
				Why Choose Our Firm
			</h2>
			<p className="text-[rgb(245,193,155)] text-center mt-3 mb-10">
				Expertise, transparency, and commitment to your legal success.
			</p>

			{/* Reasons Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				{reasons.map((reason, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 text-center">
						<div className="text-5xl text-[rgb(245,193,155)] mb-4">
							{reason.icon}
						</div>
						<h3 className="text-xl font-semibold text-gray-900">
							{reason.title}
						</h3>
						<p className="text-gray-600 text-sm mt-2">{reason.description}</p>
					</div>
				))}
			</div>

			{/* Stats Section */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
						<div className="text-4xl text-[rgb(245,193,155)] mb-3">
							{stat.icon}
						</div>
						<h4 className="text-3xl font-bold text-gray-900">{stat.value}</h4>
						<p className="text-gray-600 text-sm">{stat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
}

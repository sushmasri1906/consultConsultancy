"use client";

import {
	FaPeopleArrows,
	FaUserFriends,
	FaChild,
	FaUserShield,
	FaGavel,
	FaHome,
	FaBaby,
} from "react-icons/fa";

export default function PracticeAreas() {
	const services = [
		{
			title: "Divorce & Separation",
			icon: <FaPeopleArrows />,
			color: "text-red-500",
		},
		{
			title: "Grandparent Rights",
			icon: <FaUserFriends />,
			color: "text-blue-500",
		},
		{ title: "Child Custody", icon: <FaChild />, color: "text-green-500" },
		{
			title: "Domestic Violence",
			icon: <FaUserShield />,
			color: "text-purple-500",
		},
		{
			title: "Marriage/Civil Unions",
			icon: <FaGavel />,
			color: "text-orange-500",
		},
		{ title: "Adoption & Surrogacy", icon: <FaBaby />, color: "text-pink-500" },
		{
			title: "Property Settlements",
			icon: <FaHome />,
			color: "text-yellow-500",
		},
	];

	return (
		<section className="max-w-6xl mx-auto px-6 py-16">
			<h2 className="text-4xl font-bold text-gray-900 text-center">
				Our Practice Areas
			</h2>
			<p className="text-[rgb(245,193,155)] text-center mt-3 mb-10">
				Expertise in family law to help you through life’s legal challenges.
			</p>

			{/* Services Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 text-center">
						<div className={`text-5xl ${service.color} mb-4`}>
							{service.icon}
						</div>
						<h3 className="text-xl font-semibold text-gray-900">
							{service.title}
						</h3>
						<p className="text-gray-600 text-sm mt-2">
							This is a short description elaborating the service you have
							mentioned above.
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

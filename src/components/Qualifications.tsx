"use client";
import { FaBalanceScale, FaAward, FaBriefcase } from "react-icons/fa";

export default function Qualifications() {
	const qualifications = [
		{
			title: "Qualified Legal Attorneys",
			description:
				"This is a short description elaborating the service you have mentioned above.",
			icon: <FaBalanceScale className="w-14 h-14 text-[rgb(245,193,155)]" />,
		},
		{
			title: "Over 20 Years Of Experience",
			description:
				"This is a short description elaborating the service you have mentioned above.",
			icon: <FaAward className="w-14 h-14 text-[rgb(245,193,155)]" />,
		},
		{
			title: "Our Awards And Certificates",
			description:
				"This is a short description elaborating the service you have mentioned above.",
			icon: <FaBriefcase className="w-14 h-14 text-[rgb(245,193,155)]" />,
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
				{qualifications.map((item, index) => (
					<div
						key={index}
						className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
						{/* Icon */}
						<div className="mb-5">{item.icon}</div>

						{/* Title */}
						<h3 className="text-2xl font-semibold text-gray-900">
							{item.title}
						</h3>

						{/* Description */}
						<p className="text-gray-600 mt-3 leading-relaxed">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

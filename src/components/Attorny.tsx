"use client";

import Image from "next/image";
import { FaBalanceScale, FaTrophy } from "react-icons/fa";

export default function Attorney() {
	return (
		<section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-20 space-y-12 md:space-y-0">
			{/* Left: Text Content */}
			<div className="md:w-1/2 text-center md:text-left space-y-8">
				<h2 className="text-5xl font-bold leading-tight text-gray-900">
					Professional and Experienced
					<span className="text-[rgb(245,193,155)]"> Family Law Attorney</span>
				</h2>
				<h3 className="text-3xl font-semibold text-gray-700">
					You’ve Come To The Right Place
				</h3>
				<p className="text-lg text-gray-600 leading-relaxed">
					A trusted and experienced family law attorney dedicated to providing
					expert legal guidance. We understand the challenges of family disputes
					and offer compassionate, effective representation. With a deep
					understanding of the law and a focus on achieving the best outcomes
					for our clients, we stand by your side every step of the way. Let us
					help you navigate complex legal matters with confidence.
				</p>

				{/* Expertise Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Experience */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<FaBalanceScale className="text-[rgb(245,193,155)]" size={40} />
						<h4 className="text-2xl font-semibold text-gray-900 mt-4">
							5+ Years of Experience
						</h4>
						<p className="text-gray-600 text-md mt-2">
							Delivering expert legal representation with a strong track record
							of success.
						</p>
					</div>

					{/* Success */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<FaTrophy className="text-[rgb(245,193,155)]" size={40} />
						<h4 className="text-2xl font-semibold text-gray-900 mt-4">
							Defining Success
						</h4>
						<p className="text-gray-600 text-md mt-2">
							Committed to ensuring favorable outcomes for our clients in all
							legal matters.
						</p>
					</div>
				</div>
			</div>

			{/* Right: Image Section */}
			<div className="md:w-1/2 flex justify-center">
				<Image
					src="https://res.cloudinary.com/dq12dx327/image/upload/v1739104257/lawyer-about_ufecyp.jpg"
					alt="Professional Family Law Attorney"
					width={500}
					height={500}
					className="rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
}

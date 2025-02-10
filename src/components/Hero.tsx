"use client";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
	return (
		<section className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('https://res.cloudinary.com/dq12dx327/image/upload/v1739107528/pngtree-3d-rendered-concept-illustration-of-legal-justice-and-rules-image_3882668_gjagso.jpg')] py-20 px-6">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-70"></div>

			{/* Main Content */}
			<div className="relative z-10 flex flex-col justify-center items-center text-center w-full max-w-4xl space-y-6  pt-10 text-white">
				<h1 className="text-lg sm:text-xl md:text-2xl text-[rgb(245,193,155)] font-semibold drop-shadow-md max-w-3xl">
					Committed to Helping Our Clients Succeed
				</h1>
				<p className="text-3xl sm:text-4xl md:text-5xl pb-9 font-extrabold leading-tight drop-shadow-lg max-w-3xl">
					You Need A Reliable Law Firm That Helps Deal With Your Family Matters
				</p>

				{/* Underline */}
				<div className="w-[80%] sm:w-[50%] h-1  bg-[rgb(245,193,155)] rounded-full"></div>
			</div>

			{/* Location & Free Review */}
			<div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl text-gray-300 mt-12 space-y-6 sm:space-y-0 sm:space-x-12">
				{/* Location */}
				<div className="flex flex-col items-center text-lg sm:text-xl font-medium">
					<div className="flex items-center space-x-2">
						<FaMapMarkerAlt className="text-[rgb(245,193,155)]" size={28} />
						<span className="text-[rgb(245,193,155)] font-semibold">
							Our Location
						</span>
					</div>
					<p className="mt-1">Melbourne, Australia</p>
				</div>

				{/* Free Review */}
				<div className="flex flex-col items-center text-lg sm:text-xl font-medium">
					<div className="flex items-center space-x-2">
						<FaPhoneAlt className="text-[rgb(245,193,155)]" size={24} />
						<span className="text-[rgb(245,193,155)] font-semibold">
							Free Review
						</span>
					</div>
					<p className="mt-1">91 123-456-7890/91</p>
				</div>
			</div>
		</section>
	);
}

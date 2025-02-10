"use client";
import Image from "next/image";

export default function Testimonials() {
	const testimonials = [
		{
			name: "Shirley Parker",
			location: "United States",
			image:
				"https://res.cloudinary.com/dq12dx327/image/upload/v1738995967/32_htvwli.jpg",
			message:
				"A positive testimonial that will tell people how good you are. Some kind words from an existing or past client make a big difference and boost conversions on your website!",
		},
		{
			name: "Terry Franklin",
			location: "United States",
			image:
				"https://res.cloudinary.com/dq12dx327/image/upload/v1738996003/45_gzb5pz.jpg",
			message:
				"A positive testimonial that tells people how good you are. Some positive words from a past client can make a huge difference and boost conversions on your website!",
		},
	];

	return (
		<section
			className="relative bg-cover bg-center py-16 px-6 md:px-12"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dq12dx327/image/upload/v1739107083/review-bg_gxipfk.jpg')",
			}} // Replace with actual background image path
		>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-end">
				{/* Right Side - Heading & Testimonials */}
				<div className="w-full md:w-2/3 text-white text-right">
					{/* Heading */}
					<h2 className="text-4xl font-bold">
						Why Choose <span className="text-[rgb(245,193,155)]">Our Firm</span>
					</h2>
					<p className="text-[rgb(245,193,155)] mt-3 text-lg">
						Professional And Experienced Family Law Attorney
					</p>

					{/* Testimonials */}
					<div className="mt-8 w-[400px] ml-auto space-y-6">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
								{/* User Image */}
								<Image
									src={testimonial.image}
									alt={testimonial.name}
									width={60}
									height={60}
									className="rounded-full object-cover"
								/>
								{/* Review Content */}
								<div>
									<p className="text-gray-700 italic">
										&quot;{testimonial.message}&quot;
									</p>
									<h4 className="text-lg font-semibold text-gray-900 mt-3">
										{testimonial.name}
									</h4>
									<p className="text-gray-500 text-sm">
										{testimonial.location}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

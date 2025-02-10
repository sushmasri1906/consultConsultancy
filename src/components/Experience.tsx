"use client";
import Image from "next/image";

export default function Experience() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
				<div>
					<h2 className="text-lg font-bold text-gray-900">
						Professional And Experienced Family Law Attorney
					</h2>
					<p className="text-3xl font-semibold text-[rgb(245,193,155)] mt-3">
						Advocate Beverly Holmes
					</p>
					<p className="text-gray-600 mt-4 leading-relaxed">
						This is where you can tell people about who you are, your
						qualifications, expertise, knowledge, and achievements! This page is
						supposed to speak about you and your firm. Tell visitors what you
						specialize in. They should be encouraged to know more about you.
					</p>

					{/* Quote */}
					<blockquote className="mt-6 text-[rgb(245,193,155)] italic text-lg font-medium">
						“Strategy without tactics is the slowest route to victory.
						<br />
						Tactics without strategy is the noise before defeat.”
					</blockquote>
				</div>

				<div className="flex justify-center">
					<Image
						src="https://res.cloudinary.com/dq12dx327/image/upload/v1739112453/about_u7jckg.jpg" // Replace with actual image path
						alt="Advocate Beverly Holmes"
						width={400}
						height={500}
						className="rounded-lg shadow-lg object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

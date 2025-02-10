"use client";

export default function ContactInfo() {
	return (
		<div className="text-center p-6  w-full max-w-lg mx-auto">
			<h3 className="text-2xl font-bold text-gray-900">Call Us 24/7</h3>
			<p className="text-xl text-[rgb(245,193,155)] mt-2">
				91 123-456-7890 / 91
			</p>

			<div className="my-4 border-t border-gray-300 w-2/3 mx-auto"></div>

			<h3 className="text-2xl font-bold text-gray-900">
				Get Your First Consultation{" "}
				<span className="text-[rgb(245,193,155)]">FREE!</span>
			</h3>
			<button className="mt-4 bg-[rgb(245,193,155)] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(230,170,140)] transition">
				Request Appointment
			</button>
		</div>
	);
}

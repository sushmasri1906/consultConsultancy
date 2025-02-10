"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-10">
			<div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Contact Details */}
				<div>
					<h2 className="text-lg font-semibold">Contact Details</h2>
					<p className="mt-3">Ameenpur, near Chanda Nagar, Hyderabad</p>
					<p className="mt-2">📞 +91 9849918010 | +91 9959182899</p>
					<p className="mt-2">✉️ info@consultantsconsultancy.com</p>
					<p className="mt-2">🕒 Mon - Sat: 9.00 AM – 6.00 PM</p>
				</div>

				{/* Quick Links */}
				<div>
					<h2 className="text-lg font-semibold">Quick Links</h2>
					<ul className="mt-3 space-y-2">
						<li>
							<Link href="/" className="hover:text-gray-400">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-gray-400">
								About
							</Link>
						</li>
						<li>
							<Link href="/services" className="hover:text-gray-400">
								Services
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-gray-400">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Practice Areas & Call to Action */}
				<div>
					<h2 className="text-lg font-semibold">Practice Areas</h2>
					<ul className="mt-3 space-y-2">
						<li>🏠 Property Disputes</li>
						<li>📜 Insurance Claims</li>
					</ul>
					<button className="mt-5 bg-[rgb(245,193,155)] text-gray-900 px-4 py-2 rounded-lg hover:bg-orange-400">
						Click Here
					</button>
				</div>
			</div>

			{/* Copyright */}
			<div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm">
				<p>© 2025 Consultants Consultancy</p>
				<p>Powered by Consultants Consultancy</p>
			</div>
		</footer>
	);
}

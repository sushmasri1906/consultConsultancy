"use client";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaClock,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
	return (
		<section className="py-16 bg-gray-100">
			<div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Side - Contact Details */}
				<div className="bg-white p-8 rounded-lg shadow-md">
					<h2 className="text-3xl font-bold text-gray-900">
						Contact <span className="text-[rgb(245,193,155)]">Us</span>
					</h2>
					<p className="text-lg text-[rgb(245,193,155)] mt-2">Get in Touch</p>

					{/* Address */}
					<div className="mt-4 flex items-center space-x-3">
						<FaMapMarkerAlt className="text-[rgb(245,193,155)] w-6 h-6" />
						<p className="text-gray-700">678 Melbourne, Australia</p>
					</div>

					{/* Phone (Clickable Link) */}
					<div className="mt-3 flex items-center space-x-3">
						<FaPhoneAlt className="text-[rgb(245,193,155)] w-6 h-6" />
						<Link
							href="tel:+911234567890"
							className="text-gray-700 hover:text-[rgb(245,193,155)]">
							+91 123-456-7890
						</Link>
					</div>

					{/* Email (Clickable Link) */}
					<div className="mt-3 flex items-center space-x-3">
						<FaEnvelope className="text-[rgb(245,193,155)] w-6 h-6" />
						<Link
							href="mailto:info@example.com"
							className="text-gray-700 hover:text-[rgb(245,193,155)]">
							info@example.com
						</Link>
					</div>
				</div>

				{/* Right Side - Working Hours & Socials */}
				<div className="bg-white p-8 rounded-lg shadow-md">
					<h2 className="text-3xl font-bold text-gray-900">
						Working <span className="text-[rgb(245,193,155)]">Hours</span>
					</h2>

					{/* Working Hours */}
					<div className="mt-4 flex items-center space-x-3">
						<FaClock className="text-[rgb(245,193,155)] w-6 h-6" />
						<p className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
					</div>

					{/* Follow Us */}
					<h3 className="text-2xl font-semibold text-gray-800 mt-6">
						Follow Us
					</h3>
					<div className="mt-3 flex space-x-4">
						<Link
							href="#"
							className="text-gray-600 hover:text-[rgb(245,193,155)] text-2xl"
							aria-label="Facebook">
							<FaFacebook />
						</Link>
						<Link
							href="#"
							className="text-gray-600 hover:text-[rgb(245,193,155)] text-2xl"
							aria-label="Twitter">
							<FaTwitter />
						</Link>
						<Link
							href="#"
							className="text-gray-600 hover:text-[rgb(245,193,155)] text-2xl"
							aria-label="LinkedIn">
							<FaLinkedin />
						</Link>
						<Link
							href="#"
							className="text-gray-600 hover:text-[rgb(245,193,155)] text-2xl"
							aria-label="Instagram">
							<FaInstagram />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

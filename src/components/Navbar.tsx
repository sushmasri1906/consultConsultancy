"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-transparent shadow-md w-full absolute top-0 z-50 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/">
							<Image
								src="https://res.cloudinary.com/dq12dx327/image/upload/v1739101575/cLogo_jmnqsy.png"
								alt="Consultants Consultancy"
								width={90}
								height={90}
								className="object-contain "
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8 items-center">
						<Link
							href="/"
							className="text-white font-medium hover:text-[rgb(242,177,1)] transition">
							Home
						</Link>
						{["About", "Services"].map((item, index) => (
							<Link
								key={index}
								href={`/${item.toLowerCase()}`}
								className="text-white font-medium hover:text-[rgb(242,177,1)] transition">
								{item}
							</Link>
						))}

						<Link
							href="/contact"
							className="text-white font-medium hover:text-[rgb(242,177,1)] transition">
							Contact Us
						</Link>
						<Link
							href="/appointment"
							className="px-5 py-2 bg-[rgb(242,177,1)] text-white font-medium rounded-lg shadow-md hover:bg-opacity-80 transition">
							Request Appointment
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-[rgb(242,177,1)] focus:outline-none">
							{isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
				}`}>
				<div className="flex flex-col items-center py-4 space-y-4">
					{["/", "about", "services"].map((item, index) => (
						<Link
							key={index}
							href={item}
							className="text-white font-medium hover:text-[rgb(245,193,155)] transition">
							{item === "/"
								? "Home"
								: item.charAt(0).toUpperCase() + item.slice(1)}
						</Link>
					))}
					<Link
						href="/contact"
						className="text-white font-medium hover:text-[rgb(245,193,155)] transition">
						Contact Us
					</Link>
					<Link
						href="/appointment"
						className="px-6 py-2 bg-[rgb(245,193,155)] text-white font-medium rounded-lg shadow-md hover:bg-opacity-80 transition">
						Request Appointment
					</Link>
				</div>
			</div>
		</nav>
	);
}

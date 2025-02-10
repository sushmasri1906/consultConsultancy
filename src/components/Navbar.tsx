"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	// Navigation Links
	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Services", path: "/services" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<nav className="bg-transparent shadow-md w-full absolute top-0 z-50 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link href="/">
						<Image
							src="https://res.cloudinary.com/dq12dx327/image/upload/v1739101575/cLogo_jmnqsy.png"
							alt="Consultants Consultancy"
							width={90}
							height={90}
							className="object-contain"
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8 items-center">
						{navLinks.map((item, index) => (
							<Link
								key={index}
								href={item.path}
								className="text-white font-medium hover:text-[rgb(242,177,1)] transition">
								{item.name}
							</Link>
						))}
						<Link
							href="/appointment"
							className="px-5 py-2 bg-[rgb(242,177,1)] text-white font-medium rounded-lg shadow-md hover:bg-opacity-80 transition">
							Request Appointment
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-[rgb(242,177,1)] focus:outline-none">
						{isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu with Framer Motion Animation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden fixed top-20 left-0 w-full bg-white shadow-md rounded-b-lg py-4">
						<div className="flex flex-col items-center space-y-4">
							{navLinks.map((item, index) => (
								<Link
									key={index}
									href={item.path}
									className="text-gray-700 font-medium hover:text-[rgb(242,177,1)] transition"
									onClick={() => setIsOpen(false)}>
									{item.name}
								</Link>
							))}
							<Link
								href="/appointment"
								className="px-6 py-2 bg-[rgb(242,177,1)] text-white font-medium rounded-lg shadow-md hover:bg-opacity-80 transition"
								onClick={() => setIsOpen(false)}>
								Request Appointment
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

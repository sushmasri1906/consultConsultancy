"use client";
import { FaUniversity, FaCertificate, FaGavel } from "react-icons/fa";

export default function History() {
	return (
		<section
			className="py-20 bg-cover bg-center  flex justify-end"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dq12dx327/image/upload/v1739180067/expertise-bg_nlk4bv.jpg')",
			}}>
			<div className="max-w-6xl w-full md:w-1/2  p-8 rounded-lg shadow-lg mr-12 backdrop-blur-sm">
				<h2 className="text-3xl font-bold text-white">
					Committed To Helping Our Clients Succeed
				</h2>
				<p className="text-lg text-[rgb(245,193,155)] mt-4">
					History & Expertise
				</p>

				{/* Law School */}
				<div className="mt-6">
					<h3 className="text-2xl font-semibold text-white border-b pb-2 flex items-center">
						<FaUniversity className="text-[rgb(245,193,155)] mr-3" /> Law School
					</h3>
					<p className="text-white mt-2">
						J.D., 1991 – 1994, William Mitchell College of Law <br />
						<span className="text-white">
							(Status: Excellent – Top 5 of School)
						</span>
					</p>
				</div>

				{/* Certificate */}
				<div className="mt-6">
					<h3 className="text-2xl font-semibold text-white border-b pb-2 flex items-center">
						<FaCertificate className="text-[rgb(245,193,155)] mr-3" />{" "}
						Certificate
					</h3>
					<p className="text-white mt-2">
						Environmental and Natural Resources Law Certificate <br />
						<span className="text-white">(Status: Excellent)</span>
					</p>
				</div>

				{/* Bar Admissions */}
				<div className="mt-6">
					<h3 className="text-2xl font-semibold text-white border-b pb-2 flex items-center">
						<FaGavel className="text-[rgb(245,193,155)] mr-3" /> Bar Admissions
					</h3>
					<ul className="list-disc list-inside text-white mt-2 space-y-2">
						<li>New York</li>
						<li>The State Bar of California</li>
						<li>US Court of Florida Claims</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

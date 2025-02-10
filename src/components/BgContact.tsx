export default function BgAbout() {
	return (
		<div
			className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dq12dx327/image/upload/v1739179379/aboutpage_msardv.jpg')",
			}}>
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			<h1 className="relative text-white text-4xl font-bold">Contact Us</h1>
		</div>
	);
}

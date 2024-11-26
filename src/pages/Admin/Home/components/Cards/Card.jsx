const Card = ({ icon, number, description }) => {
	return (
		<>
			<div className="flex items-center p-4 bg-base-100 shadow-xl rounded-2xl">
				{/* Icon */}
				<div className="text-red-600 text-4xl mr-4 w-10">
					{icon}
				</div>

				{/* Content */}
				<div className="flex flex-col">
					<div className="text-3xl font-bold">{number}</div>
					<div className="text-sm text-gray-500">{description}</div>
				</div>
			</div>
		</>
	);
};

export { Card };

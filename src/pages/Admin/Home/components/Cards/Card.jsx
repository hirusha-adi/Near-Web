const Card = ({ icon, number, description }) => {
    return (
        <>
            <div className="flex items-center p-4 bg-base-100 shadow-md rounded-lg">
                {/* Icon */}
                <div className="text-primary text-4xl mr-4 w-10">
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

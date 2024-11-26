import { useEffect } from "react";

const Configuration = () => {
	useEffect(() => {
		document.title = `Embed Configuration | Near`;
	});

	return (
		<>
			Configuration
		</>
	);
};

export { Configuration };

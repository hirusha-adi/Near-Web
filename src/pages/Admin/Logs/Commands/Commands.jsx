import { useEffect } from "react";

const Commands = () => {
	useEffect(() => {
		document.title = `Commands History | Near`;
	});

	return (
		<>
			Command Logs
		</>
	);
};

export { Commands };

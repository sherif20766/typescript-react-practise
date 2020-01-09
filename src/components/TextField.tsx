import React, { useState } from "react";

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	bool?: boolean;
	func?: (arg: string) => string;
	obj?: {
		field: string;
	};
	personObj?: Person;
}

// React.FC = react functional component
const TextField: React.FC<Props> = ({ text }) => {
	const [count, setCount] = useState<number>(5);

	return (
		<div>
			<div>{text}</div>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<p>{count}</p>
		</div>
	);
};

export default TextField;

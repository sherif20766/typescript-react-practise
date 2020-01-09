import React, { useState } from "react";

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	title: string;
	bool?: boolean;
	func?: (arg: string) => string;
	obj?: {
		field: string;
	};
	personObj?: Person;
	handleChange?: () => void;
}

// React.FC = react functional component
const TextField: React.FC<Props> = ({ title, handleChange }) => {
	const [count, setCount] = useState<number>(5);
	const [text, changeText] = useState<string>("");

	return (
		<div>
			<div>{title}</div>
			<button onClick={() => setCount(count + 1)}>Add</button>
			<button onClick={() => setCount(count - 1)}>Subtract</button>
			<div>
				<input
					type="text"
					name="myInput"
					onChange={e => {
						changeText(e.target.value);
					}}
				/>
			</div>
			<p>{count}</p>
			<p>{text}</p>
		</div>
	);
};

export default TextField;

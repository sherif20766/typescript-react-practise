import React from "react";

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
	return <div>{text}</div>;
};

export default TextField;

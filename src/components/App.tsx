import React from "react";
import TextField from "./TextField";

const App = () => {
	return (
		<div>
			<div>App</div>
			<TextField
				text="typescript is cool"
				bool={true}
				obj={{ field: "some text value" }}
				personObj={{ firstName: "typey", lastName: "McTypeyFace" }}
			/>
		</div>
	);
};

export default App;

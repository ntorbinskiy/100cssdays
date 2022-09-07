import React, {useState} from "react";
import "./SecondItem.css";
const initState = ["", "", ""];
const activeState = ["active0", "active1", "active2"];
const revertState = ["active0_rev", "active1_rev", "active2_rev"];

const states = {
	active: activeState,
	revert: revertState,
	init: initState
};

const moveState = {
	active: "revert",
	init: "active",
	revert: "active"
};

const SecondItem = () => {
	const [state, setState] = useState("init");
	const onClick = () => {
		setState(prevState => moveState[prevState])
	};
	console.log("Current state", state);
	return (
		<div onClick={onClick}>
			<div
				className={`stick ${states[state][0]}`}
				/>
			<div
				className={`stick ${states[state][1]}`}
				/>
			<div
				className={`stick ${states[state][2]}`}
				/>
		</div>
	);
};

export default SecondItem;

import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button";
import AppContext from "../Store/AppContext";
import classes from "./StartGame.module.scss";

const StartGame = () => {
	const ctx = useContext(AppContext);

	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	// Case 1
	useEffect(() => {
		setCount((count) => count + 1);
		setCount((count) => count + 1);
	}, []);
	console.log(count); // 2

	// Case 2
	useEffect(() => {
		setCount(count + 1);
		setCount(count + 1);
	}, []);
	console.log(count); // 1

	// Case 3
	useEffect(() => {
		setCount(count + 1);
		setCount2(count2 + 1);
	}, []);
	console.log("trigger"); // log trigger 1 lần

	return (
		<div className={classes.start}>
			<h2>Welcome to React Quiz Game!</h2>
			<Button onClick={ctx.onStart} type={"PRIMARY"} title="Start" />
		</div>
	);
};

export default StartGame;

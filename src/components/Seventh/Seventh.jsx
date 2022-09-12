import React from "react";
import { useState } from "react";
import "./Seventh.css";
const Seventh = () => {
	const [input, setInput] = useState("nav_input");
	const [menu, setMenu] = useState("back");
	const [mainMenu, setMainMenu] = useState("main_menu");
	const classCheck = (elem, setElem, prevElem) => {
		if (elem === prevElem) {
			console.log("active");
			setElem(`${elem} active`);
		} else if (elem !== prevElem) {
			console.log("not active");
			setElem(prevElem);
		}
		console.log(elem);
	};
	const mainMenuCheck = () => {
		classCheck(menu, setMenu, "back");
		classCheck(mainMenu, setMainMenu, "main_menu");
	};
	return (
		<div className="frame frame7">
			<div className="center center7">
				<div className={mainMenu}>
					<div className="nav">
						<div
							className="menu_icon"
							onClick={mainMenuCheck}>
							<div className="stick1"></div>
							<div className="circle_1"></div>
							<div className="stick2"></div>
						</div>
						<div className="title">Notifications</div>
						<input
							type="text"
							className={input}
							placeholder="Search ..."
							spellCheck="false"
							data-ms-editor="true"
						/>
						<div
							className="search_"
							onClick={() => classCheck(input, setInput, "nav_input")}>
							<div className="stick_search"></div>
							<div className="circle_search"></div>
						</div>
					</div>
					<div className="line"></div>
					<div className="posts">
						<div className="post post_1">
							<div className="circle_2"></div>
							<span className="post_time">9:24 AM</span>
							<div className="post_text">
								<span className="post_name">John Walker </span>
								posted a photo on your wall.
							</div>
						</div>
						<div className="post post_2">
							<div className="circle_2"></div>
							<span className="post_time">8:19 AM</span>
							<div className="post_text">
								<span className="post_name">Alice Parker </span>
								posted a photo on your wall.
							</div>
						</div>
						<div className="post post_3">
							<div className="circle_2"></div>
							<span className="post_time">Yesterday</span>
							<div className="post_text">
								<span className="post_name">Luke Wayne </span>
								added you as friend.
							</div>
						</div>
					</div>
				</div>
				<div className={menu}>
					<div className="back_list">
						<span className="back_list_item">Dashboard</span>
						<span className="back_list_item">Profile</span>
						<span className="back_list_item">Notifications</span>
						<span className="back_list_item">Messages</span>
						<span className="back_list_item">Settings</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Seventh;

import React from "react";
import "./Sixth.css";

const Sixth = () => {
	return (
		<div className="frame frame6">
			<div className="center center6">
				<div className="img">
					<div className="img_">
						<img
							src="https://100dayscss.com/codepen/jessica-potter.jpg"
							alt="100days"
							className="img_pic"
						/>
						<div className="circle1"></div>
						<div className="circle2"></div>
					</div>
					<div className="text_wrap">
						<div className="name text_6">Jessica Potter</div>
						<div className="job  text_6">Visual Artist</div>
					</div>
					<button className="follow btn">Follow</button>
					<button className="message btn">Message</button>
				</div>
				<div className="statistics">
					<div className="stats st_1">
						<div className="num">523</div>
						Posts
					</div>
					<div className="stats">
						<div className="num">1387</div>
						Likes
					</div>
					<div className="stats st_3">
						<div className="num">146</div>
						Follower
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sixth;

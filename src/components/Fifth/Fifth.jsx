import React from "react";
import "./Fifth.css";
const Fifth = () => {
	return (
		<div>
			<div className="frame frame5">
				<div className="center center5">
					<div className="graphic">
						<div className="top">
							<div className="weekly_rep">
								WEEKLY REPORT
								<div className="date">01. Feb - 07. Feb</div>
							</div>
							<div className="rev">
								Revenue
								<div className="count">$ 3621.79</div>
							</div>
						</div>
						<div className="mid">
							<div className="views">Views</div>
							<div className="purchases">Purchases</div>
						</div>
						<div className="lines">
							<div className="starter_line" />
							<div className="center_line" />
							<div className="end_line" />
							<div className="data_red">
								<svg>
									<polyline
										points="9,46 40,10 80,15 120,10 180,40 220,48 260,10"
										fill="none"
										stroke="#FA7373"
										strokeWidth={"2"}
									/>
									<polyline
										points="9,61 50,50 90,65 130,55 171,61 211,65 251,50"
										stroke="rgb(135, 170, 255)"
										strokeWidth={"2"}
										fill="none"
									/>
								</svg>
							</div>
							<div className="dots_red">
								<div className="dot_red-1">
									<div className="dot_an_red">458</div>
								</div>
								<div className="dot_red-2">
									<div className="dot_an_red">812</div>
								</div>
								<div className="dot_red-3">
									<div className="dot_an_red">746</div>
								</div>
								<div className="dot_red-4">
									<div className="dot_an_red">877</div>
								</div>
								<div className="dot_red-5">
									<div className="dot_an_red">517</div>
								</div>
								<div className="dot_red-6">
									<div className="dot_an_red">434</div>
								</div>
								<div className="dot_red-7">
									<div className="dot_an_red">458</div>
								</div>
							</div>
							<div className="dots_blue">
								<div className="dot_blue-1">
									<div className="dot_an_blue">26</div>
								</div>
								<div className="dot_blue-2">
									<div className="dot_an_blue">41</div>
								</div>
								<div className="dot_blue-3">
									<div className="dot_an_blue">22</div>
								</div>
								<div className="dot_blue-4">
									<div className="dot_an_blue">36</div>
								</div>
								<div className="dot_blue-5">
									<div className="dot_an_blue">25</div>
								</div>
								<div className="dot_blue-6">
									<div className="dot_an_blue">13</div>
								</div>
							</div>
						</div>
						<div className="days">
							<div className="day">MON</div>
							<div className="day">TUE</div>
							<div className="day">WED</div>
							<div className="day">THU</div>
							<div className="day">FRI</div>
							<div className="day">SAT</div>
							<div className="day">SUN</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fifth;

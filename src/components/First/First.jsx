import React from "react";
import "./First.css";
import { motion } from "framer-motion";

const First = () => {
	return (
		<div className="frame frame1">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: "easeOut", duration: 1 }}
				className="center1">
				<motion.div
					className="numbers"
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{ duration: 1 }}>
					<div className="one_0"></div>
					<div className="one_1"></div>
					<div className="zero_0"></div>
					<div className="zero_1"></div>
				</motion.div>
				<motion.div
					className="text"
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ duration: 1 }}>
					<div className="text_days">DAYS</div>CSS CHALLENGE
				</motion.div>
			</motion.div>
		</div>
	);
};

export default First;

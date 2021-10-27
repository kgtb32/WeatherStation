import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Navbar, Button } from "react-bootstrap";

import { DataContext } from "../../context";

import { AiOutlineMenu } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";

import thermometer from "../../logo_weather/thermometer-50.svg";
import wet from "../../logo_weather/wet.svg";
import tornado from "../../logo_weather/tornado.svg";

function TopBar({ updateSidebarVisibility }) {
	const { fetchDataRangeDate, dataWeather, fetchDataRealTime, realTimeData} = DataContext();

	const [temperature, setTemperature] = useState();
	const [pressure, setPressure] = useState();
	const [humidity, setHumidity] = useState();

	useEffect(() => {
		fetchDataRealTime()
	}, []);

	useEffect(() => {
		if (realTimeData) {
			setTemperature(Number(realTimeData.temperature));
			setHumidity(Number(realTimeData.humidity));
			setPressure(Number(realTimeData.pressure));
		}
	}, [realTimeData]);
	//#687eb6

	return (
		<Navbar
			style={styles.navbar}
			className="justify-content-around"
			variant="dark"
			sticky="top"
		>
			<Button
				onClick={() => updateSidebarVisibility()}
				variant="light"
				className="d-inline-block d-sm-inline-block d-md-none"
			>
				<AiOutlineMenu />
			</Button>
			<Navbar.Brand>
				<span style={styles.overlay}>
					<img
						alt=""
						src={thermometer}
						width="30"
						height="30"
						style={styles.image}
						className="d-inline-block align-top"
					/>
					{temperature ? temperature.toFixed(2) : ""}
				</span>
				<span style={styles.overlay}>
					<img
						alt=""
						src={wet}
						width="30"
						height="30"
						className="d-inline-block align-top "
						style={styles.image}
					/>
					{humidity ? humidity.toFixed(2) : ""}
				</span>
				<span style={styles.overlay}>
					<img
						alt=""
						src={tornado}
						width="30"
						height="30"
						style={styles.image}
						className="d-inline-block align-top"
					/>
					{pressure ? pressure.toFixed(2) : ""}
				</span>
			</Navbar.Brand>
		</Navbar>
	);
}

const styles = {
	navbar: {
		background: "#273c75",
	},
	image: {
		filter: "invert(1)",
		marginRight: "5px",
	},
	overlay: {
		backgroundColor: "#192a56",
		padding: "2px 10px",
		color: "#fffff",
		borderRadius: 3,
		marginRight: "4px",
	},
};

TopBar.propTypes = {
	updateSidebarVisibility: PropTypes.func,
};

TopBar.defaultProps = {
	updateSidebarVisibility: () => {},
};

export default TopBar;

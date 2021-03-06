import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import coverSun from "../../logo_weather/coverSun-modified.png"
import Particles from "react-tsparticles";
import {
	ProSidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarHeader,
	SidebarContent,
	SidebarFooter,
} from "react-pro-sidebar";

import * as IoIcons from "react-icons/io";
import { RiTempColdFill } from "react-icons/ri";

import "react-pro-sidebar/dist/css/styles.css";

function Sidebar({ sidebarVisible, setSidebarVisible }) {
	const [animationEnabled] = useState(false);

	const location = useLocation().pathname;

	useEffect(() => {
		setSidebarVisible(false);
	}, [location]);

	return (
		<div className="sidebar">
			{animationEnabled && (
				<Particles
					id="tsparticles"
					style={{
						position: "absolute",
						height: "100vh",
					}}
					options={{
						background: {
							color: {
								value: "#1d1d1d",
							},
						},
						fpsLimit: 60,
						interactivity: {
							detectsOn: "canvas",
							events: {
								onClick: {
									enable: true,
									mode: "push",
								},
								onHover: {
									enable: true,
									mode: "repulse",
								},
								resize: true,
							},
							modes: {
								bubble: {
									distance: 400,
									duration: 2,
									opacity: 0.8,
									size: 40,
								},
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
							},
						},
						particles: {
							color: {
								value: "#ffffff",
							},
							links: {
								color: "#ffffff",
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							collisions: {
								enable: true,
							},
							move: {
								direction: "none",
								enable: true,
								outMode: "bounce",
								random: false,
								speed: 6,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									value_area: 800,
								},
								value: 80,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: "circle",
							},
							size: {
								random: true,
								value: 5,
							},
						},
						detectRetina: true,
					}}
				/>
			)}
			<JoliProSidebar
				rtl={false}
				collapsed={false}
				toggled={sidebarVisible}
				onToggle={(value) => {
					setSidebarVisible(value);
				}}
				breakPoint="md"
				active={animationEnabled}
				style={{
					backgroundColor: "transparent",
				}}
			>
				<SidebarHeader>
					<h4 className="text-center">
						<img src={coverSun} width="30" height="30" className="d-inline-block align-top"/>
						Weather Station
					</h4>
				</SidebarHeader>
				<SidebarContent>
					<Menu iconShape="circle">
						<MenuItem icon={<IoIcons.IoMdHome />}>
							Accueil
							<Link to="/" />
						</MenuItem>
						<SubMenu title="Historique" icon={<IoIcons.IoMdTime />}>
							<MenuItem icon={<RiTempColdFill />}>
								Temp??ratures
								<Link to="/temperatures" />
							</MenuItem>
							<MenuItem icon={<IoIcons.IoIosWater />}>
								Taux d'humidit??
								<Link to="/humidity" />
							</MenuItem>
							<MenuItem icon={<IoIcons.IoIosAnalytics />}>
								Pression Atmosph??rique
								<Link to="/pressure" />
							</MenuItem>
						</SubMenu>
					</Menu>
				</SidebarContent>
				{/* <SidebarFooter>
					<Menu iconShape="circle">
						<MenuItem icon={<IoIcons.IoMdSettings />}>
							Param??tres
							<Link to="/settings" />
						</MenuItem>
					</Menu>
				</SidebarFooter> */}
			</JoliProSidebar>
		</div>
	);
}

const JoliProSidebar = styled(ProSidebar)`
	z-index: 1026;

	&.pro-sidebar > .pro-sidebar-inner {
		${({ active }) =>
			active ? "background: transparent" : "background: #273c75"}
	}

	& * .pro-inner-item {
		background: #192a56;
		border-radius: 0px 8px 8px 0px;
		margin-top: 4px;
		width: 95%;
	}

	& * .react-slidedown {
		width: 95%;
		border-radius: 0px 8px 8px 0px;
		margin-top: 2px;
	}

	& * .pro-inner-item > .pro-icon-wrapper {
		background-color: #273c75 !important;
	}

	& * .pro-inner-list-item {
		background-color: #192a56 !important;
	}
`;

Sidebar.propTypes = {
	sidebarVisible: PropTypes.bool,
	setSidebarVisible: PropTypes.func,
};

Sidebar.defaultProps = {
	sidebarVisible: true,
	setSidebarVisible: () => {},
};

export default Sidebar;

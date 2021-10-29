import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Sidebar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import temperatures from "./pages/Temperatures";
import Pressure from "./pages/Pressure";
import Humidity from "./pages/Humidity";
import Home from "./pages/Home";
import { ContextProvider } from "./context";
import "./index.css";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./pages/Settings";

const breakPoint = 720;

const Router = () => {
	const [sideNavVisible, setSidenavVisible] = useState(true);
	const sidebarVisible = () => {
		return window.innerWidth <= breakPoint ? sideNavVisible : true;
	};

	const updateSidebarVisibility = () => {
		setSidenavVisible(!sideNavVisible);
	};

	return (
		<BrowserRouter>
			<React.StrictMode>
				<ContextProvider>
					<div className="container_flex" style={{ height: "100vh" }}>
						<Sidebar
							sidebarVisible={sidebarVisible()}
							setSidebarVisible={setSidenavVisible}
						/>
						<div
							style={{ height: "100vh", background: "white", zIndex: 1024 }}
							className="overflow-auto w-100"
						>
							<TopBar updateSidebarVisibility={updateSidebarVisibility} />
							<Switch>
								<Route path="/" component={Home} exact />
								<Route path="/temperatures" component={temperatures} exact />
								<Route path="/humidity" component={Humidity} exact />
								<Route path="/pressure" component={Pressure} exact />
								<Route path="/settings" component={Settings} exact />
							</Switch>
						</div>
					</div>
				</ContextProvider>
			</React.StrictMode>
		</BrowserRouter>
	);
};

ReactDOM.render(
	<>
		<Router />
	</>,
	document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Sidebar from "./components/SideBar/SideBar";
import temperatures from "./pages/Temperatures";
import Pressure from "./pages/Pressure";
import Humidity from "./pages/Humidity";
import Home from "./pages/Home";

import { ContextProvider } from "./context";

import "./index.css";

import "./i18n";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ContextProvider>
				<div className="container_flex" style={{ height: "100vh" }}>
					<Sidebar />
					<div
						style={{ height: "100vh", background: "white", zIndex: 1024 }}
						className="overflow-auto w-100"
					>
						<Switch>
							<Route path="/" component={Home} exact />
							<Route path="/temperatures" component={temperatures} exact />
							<Route path="/pressure" component={Pressure} exact />
							<Route path="/humidity" component={Humidity} exact />
						</Switch>
					</div>
				</div>
			</ContextProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);

import React from "react";
import { Outlet } from "react-router-dom";
import PortalFooter from "./portal/footer/PortalFooter";
import PortalNavbar from "./portal/navbar/PortalNavbar";


function App() {
	return (
		<React.Fragment>
			<PortalNavbar />
			<Outlet />
			<PortalFooter />
		</React.Fragment>
	);
}

export default App;

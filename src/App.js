import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// screens
import Home from "./screens/Home";
import Overview from "./screens/Overview";

library.add(fab);
function App() {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route exact strict path="/">
					<Home />
				</Route>
				<Route path="/overview">
					<Overview />
				</Route>
				<Route path="/gallery"></Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

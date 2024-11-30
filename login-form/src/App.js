import "./App.css";
import EmployeeList from "./components/EmployeeList";
import LoginComponent from "./components/LoginComponent";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<LoginComponent />
			<Routes>
				<Route path="/employee_list" element={<EmployeeList />}></Route>
			</Routes>
		</>
	);
}

export default App;

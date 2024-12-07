import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import DetailComponent from "./components/DetailComponent";
import HeaderComponent from "./components/HeaderComponent";
import AddFormikComponent from "./components/AddFormikComponent";

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path={"/homepage"} element={<HomeComponent />}></Route>
				<Route path={"/students"} element={<StudentList />}></Route>
				<Route path={"/students/add_students"} element={<AddFormikComponent />}></Route>
				<Route path={"/students/detail_students/:id"} element={<DetailComponent />}></Route>
			</Routes>
			<FooterComponent />
		</>
	);
}

export default App;

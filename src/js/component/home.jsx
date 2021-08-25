import React, { useState } from "react";
import {
	Jumbotron,
	Button,
	Link,
	Toast,
	ToastBody,
	ToastHeader,
	FormGroup,
	Label,
	Input
} from "reactstrap";
//include images into your bundlee
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const en_lg = [
		"My name is Fabián Chacón 🇨🇷",
		"I am a Full Stack developer in Web environments and a student of Electronic Engineering.",
		"I want to show you a bit of my work!",
		"I consider myself a problem solver, and I see teamwork as a pillar for development inside organizations.",
		"My networks and contact:",
		"Some projects done:",
		"Weighted Average Calculator",
		"Tool to facilitate the calculation of average grades for university students.",
		"Visit the site",
		"Movie Repository",
		"Film appreciation course tool, try to enter the code 1001.",
		"Simple Counter",
		"A timer with three buttons for manipulation: pause, rewind and restore .",
		"Todo List",
		"An interface to create and delete pending tasks using text inputs.",
		"Language:"
	];

	const sp_lg = [
		"Mi nombre es Fabián Chacón 🇨🇷",
		"Soy desarrollador Full Stack en entornos Web y estudiante de Ingeniería en Electrónica.",
		"¡Quiero mostrarte un poco de mi trabajo!",
		"Me considero una persona solucionadora de problemas, y veo el trabajo en equipo como un pilar para desarrollo para las organizaciones.",
		"Mis redes y contacto:",
		"Algunos trabajos realizados:",
		"Calculadora de promedio ponderado",
		"Herramienta para facilitar el cálculo de promedio para estudiantes universitarios.",
		"Visitar el sitio",
		"Repositorio de películas",
		"Herramienta curso de apreciación de cine, intenta ingresar el código 1001.",
		"Contador simple",
		"Un temporizador con tres botones para su manipulación.",
		"Lista de tareas",
		"Una interfaz para crear y eliminar tareas pendientes mediante entradas de texto.",
		"Idioma:"
	];

	const [language, setLanguage] = useState(en_lg);

	function changeLg(index) {
		if (index === 0) {
			setLanguage(en_lg);
		} else if (index === 1) {
			setLanguage(sp_lg);
		}
	}

	return (
		<div className="mt-2 container-fluid">
			<div className="row d-flex justify-content-end mb-1 p-0">
				<span>{language[15]} &nbsp;</span>
				<Button
					color="light"
					size="sm"
					className="border-dark"
					onClick={() => {
						changeLg(1);
					}}>
					🇪🇸 Español
				</Button>
				&nbsp;
				<Button
					color="light"
					size="sm"
					className="border-dark"
					onClick={() => {
						changeLg(0);
					}}>
					🇺🇲 English
				</Button>
				&nbsp;
			</div>
			<div
				className="container d-flex justify-content-center pt-0 mt-0 text-center"
				key={language}>
				<div className="row d-flex justify-content-center">
					<div className="col-12">
						<div
							className="text-center p-5 rounded rounded-5"
							style={{ "background-color": "#e9ecef" }}>
							<p />
							<h2 className="display-4">{language[0]}</h2>
							<p className="lead">{language[1]}</p>
							<p className="lead">
								<strong>{language[2]}</strong>
							</p>
							<hr className="my-2" />
							<p className="mt-3">
								<h5>{language[3]}</h5>
							</p>
							<p className="mt-3">
								<h5>{language[4]}</h5>
							</p>
							<div className="row d-flex justify-content-between">
								<span className="m-1">
									<a
										href="https://github.com/fabianchs"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-github fa-2x" />
										<span>/fabianchs</span>
									</a>
								</span>
								<span className="m-1">
									<a
										href="https://twitter.com/fabiandchs"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-twitter fa-2x" />
										<span>/fabiandchs</span>
									</a>
								</span>
								<span className="m-1">
									<a
										href="https://www.linkedin.com/in/fabiandchs/"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-linkedin fa-2x" />
										<span>/fabiandchs</span>
									</a>
								</span>

								<span className="m-1">
									<a
										href="https://www.instagram.com/fabiandchs/"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-instagram fa-2x" />
										<span>/fabiandchs</span>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<i className="fab fa-5x fa-html5 m-2" />
				<i className="fab fa-css3-alt fa-5x m-2" />
				<i className="fab fa-5x fa-js-square m-2" />
				<i className="fab  fa-bootstrap fa-5x m-2 " />
				<i className="fab fa-git fa-5x m-2" />
				<i className="fab fa-5x fa-react m-2" />
				<i className="fab  fa-python fa-5x m-2" />
				<i className="fab fa-github fa-5x m-2" />
				<i className="fas fa-server fa-5x m-2" />
			</div>
			<div className="row mt-3 d-flex justify-content-center text-center">
				<span className="text-center h3 text-info">{language[5]}</span>
			</div>
			<div className="row mt-2 d-flex justify-content-center">
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>{language[6]}</ToastHeader>
						<ToastBody>{language[7]}</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://grade-calculator-nine.vercel.app/"
							target="__blank">
							{language[8]}
						</Button>
					</Toast>
				</div>
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>{language[9]}</ToastHeader>
						<ToastBody>{language[10]}</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://course-cinema.vercel.app/"
							target="__blank">
							{language[8]}
						</Button>
					</Toast>
				</div>
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>{language[11]}</ToastHeader>
						<ToastBody>{language[12]}</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://simple-counter-three.vercel.app/"
							target="__blank">
							{language[8]}
						</Button>
					</Toast>
				</div>
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>{language[13]}</ToastHeader>
						<ToastBody>{language[14]}</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://exercise-todo-list.vercel.app/"
							target="__blank">
							{language[8]}
						</Button>
					</Toast>
				</div>
			</div>
		</div>
	);
};

export default Home;

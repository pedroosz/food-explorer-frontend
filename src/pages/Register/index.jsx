import { Button } from "../../components/Button";
import theme from "../../styles/theme";
import {
	FoodExplorer,
	Form,
	FormField,
	FormInput,
	FormLabel,
	FormTitle,
	Wrapper,
} from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";
import { api } from "../../services/api";

export function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSubmit() {
		if (!name || !email || !password) {
			return alert("campos faltando");
		}

		if (password.length < 6) {
			return alert("Sua senha deve ter no mínimo 6 caracteres.");
		}

		api
			.post("/users", {
				name,
				email,
				password,
			})
			.then(() => {
				navigate("/");
			})
			.catch((err) => {
				if (err.response) {
					return alert(err.response.data.message);
				}

				alert("Algo inesperado aconteceu.");
			});
	}

	return (
		<Wrapper>
			<FoodExplorer src={logo} />
			<Form onSubmit={(e) => e.preventDefault()}>
				<FormTitle>Crie sua conta</FormTitle>

				<FormField>
					<FormLabel htmlFor="nameInput">Nome</FormLabel>
					<FormInput
						id="nameInput"
						type="email"
						placeholder="Exemplo: Maria da Silva"
						onChange={(e) => setName(e.target.value)}
					/>
				</FormField>

				<FormField>
					<FormLabel htmlFor="emailInput">Email</FormLabel>
					<FormInput
						id="emailInput"
						type="email"
						placeholder="Exemplo: exemplo@exemplo.com.br"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormField>

				<FormField>
					<FormLabel htmlFor="passwordInput">Senha</FormLabel>
					<FormInput
						id="passwordInput"
						type="password"
						placeholder="No mínimo 6 caracteres"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormField>

				<FormField>
					<Button
						background={theme.COLORS.TOMATO_200}
						onClick={() => handleSubmit()}
					>
						Criar conta
					</Button>
					<Button onClick={() => navigate("/")}>Já tenho uma conta</Button>
				</FormField>
			</Form>
		</Wrapper>
	);
}

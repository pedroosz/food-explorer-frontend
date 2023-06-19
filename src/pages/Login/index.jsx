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
import { useAuth } from "../../hooks/auth";

export function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { logIn } = useAuth();

	function handleSubmit() {
		logIn({ email, password });
	}

	return (
		<Wrapper>
			<FoodExplorer src={logo} />
			<Form onSubmit={(e) => e.preventDefault()}>
				<FormTitle>Faça login</FormTitle>

				<FormField>
					<FormLabel htmlFor="nameInput">Email</FormLabel>
					<FormInput
						id="nameInput"
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
						placeholder="Mínimo de 6 caracteres"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormField>

				<FormField>
					<Button
						background={theme.COLORS.TOMATO_200}
						onClick={() => handleSubmit()}
					>
						Entrar
					</Button>
					<Button onClick={() => navigate("/register")}>Criar uma conta</Button>
				</FormField>
			</Form>
		</Wrapper>
	);
}

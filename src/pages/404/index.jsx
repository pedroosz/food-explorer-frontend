import { styled } from "styled-components";

export function NotFound() {
	const Container = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		gap: 1rem;

		h1 {
			font-size: 2rem;
		}

		a {
			font-size: 1.5rem;
		}
	`;

	return (
		<Container>
			<h1>Oops! Algo de errado não está certo.</h1>
			<a href="/">Voltar ao início</a>
		</Container>
	);
}

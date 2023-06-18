import { styled } from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(props) =>
		props.background ? props.background : "transparent"};
	padding: 0.9rem 2rem;
	font-size: 0.9rem;
	font-family: "Poppins", sans-serif, sans-serif;
	border-radius: 0.3rem;
	font-weight: 500;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.9rem;

	> img {
		width: 1.2rem;
	}

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		padding: 0.8rem 1rem;
		font-size: 0.8rem;
	}
`;

import { styled } from "styled-components";

export const Wrapper = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem;
	gap: 1rem;

	min-height: 100vh;
	max-width: 1100px;
	margin: 0 auto;

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		flex-direction: column;
		justify-content: center;
		align-items: normal;
	}
`;

export const FoodExplorer = styled.img`
	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		scale: 0.8;
	}
`;

export const Form = styled.form`
	padding: 4rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	display: flex;
	flex-direction: column;
	gap: 2rem;

	min-width: min(476px, 80%);

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		padding: 0;
		background: none;
	}
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

export const FormTitle = styled.h1`
	text-align: center;
	font-size: 2.2rem;

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		display: none;
	}
`;

export const FormInput = styled.input`
	padding: 1rem;
	background-color: ${({ theme }) => theme.COLORS.DARK_900};
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.COLORS.LIGHT_500};
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	color: ${({ theme }) => theme.COLORS.LIGHT_400};
	font-size: 1rem;
`;

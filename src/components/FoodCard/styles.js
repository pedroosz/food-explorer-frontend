import { styled } from "styled-components";

export const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	border-radius: 0.3rem;
	gap: 1rem;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.COLORS.DARK_200};

	width: 305px;
	height: 100%;
	flex: none;

	position: relative;

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		width: 210px;
		padding: 1.5rem;
		gap: 0.8rem;
	}
`;

export const CardTitle = styled.a`
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	color: white;
	font-family: "Poppins", sans-serif;

	&:hover {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		font-size: 0.95rem;
	}
`;

export const CardImage = styled.img`
	border-radius: 999px;
	width: min(100%, 180px);
	align-self: center;

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		width: 90px;
	}
`;

export const CardDescription = styled.p`
	font-size: 0.9rem;
	font-weight: normal;
	text-align: center;
	color: ${({ theme }) => theme.COLORS.LIGHT_400};

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		display: none;
	}
`;

export const CardPrice = styled.h1`
	font-size: 2rem;
	font-weight: normal;
	text-align: center;
	color: ${({ theme }) => theme.COLORS.CAKE_200};

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		font-size: 0.95rem;
	}
`;

export const CardControls = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		flex-direction: column;
	}
`;

export const CardActionButton = styled.a`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;

	> img {
		width: 1.2rem;
	}

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		font-size: 0.8rem;
	}
`;

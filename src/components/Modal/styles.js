import { styled } from "styled-components";

export const StyledDialog = styled.dialog`
	position: fixed;
	padding: 1rem;
	z-index: 999;

	margin: auto;

	width: min(500px, calc(100vw - 2rem));
	height: min(300px, 70vh);

	border: none !important;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLORS.DARK_800};
	color: ${({ theme }) => theme.COLORS.LIGHT_300};
	box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);

	&::backdrop {
		background-color: rgba(0, 0, 0, 0.75);
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	padding: 1rem;
	color: ${({ theme }) => theme.COLORS.TOMATO_100};
`;

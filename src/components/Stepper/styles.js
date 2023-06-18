import { styled } from "styled-components";

export const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
	gap: 0.5rem;

	> button {
		background-color: transparent;
		align-items: center;
	}
`;

export const StepperAmount = styled.p`
	font-weight: bold;
	font-size: 1rem;
	text-align: center;
	margin: 0 0.5rem;
`;

export const StepperButton = styled.button`
	display: flex;
	align-items: center;
	font-weight: bold;
	padding: 0.5rem;
	justify-content: center;

	> img {
		width: 1.2rem;
		height: 1.2rem;
	}

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		> img {
			width: 0.9rem;
			height: 0.9rem;
		}
	}
`;

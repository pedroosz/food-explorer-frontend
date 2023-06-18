import { styled } from "styled-components";

export const FoodSliderContainer = styled.section`
	position: relative;
	margin-bottom: 2.2rem;
`;

export const FoodSliderCategory = styled.h1`
	margin-bottom: 1.3rem;
	font-size: 2rem;
	font-weight: 400;
	font-family: "Poppins", sans-serif;
	color: ${({ theme }) => theme.COLORS.LIGHT_300};
	z-index: 10;

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		font-size: 1.2rem;
	}
`;

export const FoodSlidesContainer = styled.div`
	display: flex;
	overflow-x: auto;
	scroll-behavior: smooth;
	gap: 1.5rem;

	&::-webkit-scrollbar {
		display: none !important;
	}

	position: relative;
`;

export const FoodSliderButtons = styled.div`
	position: absolute;

	top: 2.5rem;
	bottom: 0;
	left: -0.2rem;
	right: -0.2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	pointer-events: none;

	@media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
		display: none;
	}
`;

export const NextPageButton = styled.button`
	background-image: linear-gradient(to left, #000a0f, transparent);
	height: 100%;
	padding: 2rem;
	z-index: 5;

	margin-left: auto;
	pointer-events: all;

	&:focus {
		box-shadow: none;
	}
`;

export const PrevPageButton = styled.button`
	background-image: linear-gradient(to right, #000a0f, transparent);
	height: 100%;
	padding: 2rem;
	z-index: 5;

	margin-right: auto;
	pointer-events: all;

	&:focus {
		box-shadow: none;
	}
`;

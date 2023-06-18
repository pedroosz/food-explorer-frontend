import { StyledButton } from "./styles";

export function Button({ children, background, onClick }) {
	return onClick ? (
		<StyledButton background={background} onClick={() => onClick()}>
			{children}
		</StyledButton>
	) : (
		<StyledButton background={background}>{children}</StyledButton>
	);
}

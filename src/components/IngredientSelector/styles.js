import { styled } from "styled-components";

export const ItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5rem;
	background-color: ${({ theme }) => theme.COLORS.DARK_800};
	color: ${({ theme }) => theme.COLORS.LIGHT_100} !important;
	border-radius: 0.3rem;
	padding: 0.5rem;
`;

export const Item = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.4rem;
	font-size: 1rem;
	background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
	border-radius: 0.5rem;
`;

export const DeleteButton = styled.button`
	font-size: 1rem;
`;

export const AddItemButton = styled.button`
	font-size: 1rem;
`;

export const AddItemInput = styled.input`
	background-color: transparent !important;
	padding: 0.2rem !important;
	font-size: 1rem;
`;

export const AddItemBox = styled.span`
	border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_600};
	color: ${({ theme }) => theme.COLORS.LIGHT_600};
	font-size: 1rem;
	padding: 0.5rem;
	border-radius: 0.5rem;

	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

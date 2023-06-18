import { useState } from "react";
import { CloseButton, StyledDialog } from "./styles";

export function Modal({ children, modalRef }) {
	function closeModal(e) {
		e.preventDefault();

		modalRef.current.close();
	}

	return <StyledDialog ref={modalRef}>{children}</StyledDialog>;
}

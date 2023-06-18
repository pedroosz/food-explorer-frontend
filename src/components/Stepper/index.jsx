import { useState } from "react";
import { StepperAmount, StepperButton, StyledDiv } from "./styles";

import Minus from "../../assets/icons/Minus.svg";
import Plus from "../../assets/icons/Plus.svg";

export function Stepper() {
	const [amount, setAmount] = useState(0);

	function increaseAmount() {
		setAmount(amount + 1);
	}

	function decreaseAmount() {
		if (amount == 0) return;

		setAmount(amount - 1);
	}

	return (
		<StyledDiv>
			<StepperButton onClick={() => increaseAmount()}>
				<img src={Plus} alt="" />
			</StepperButton>
			<StepperAmount>{amount < 10 ? `0${amount}` : amount}</StepperAmount>
			<StepperButton onClick={() => decreaseAmount()}>
				<img src={Minus} alt="" />
			</StepperButton>
		</StyledDiv>
	);
}

import { PulseLoader } from "react-spinners";
import theme from "../../styles/theme";

export function Loader() {
	return (
		<PulseLoader
			color={theme.COLORS.CAKE_100}
			style={{ position: "absolute", left: "50%", top: "50%" }}
		/>
	);
}

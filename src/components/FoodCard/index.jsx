import { useAuth } from "../../hooks/auth";
import theme from "../../styles/theme";
import { Button } from "../Button";
import { Stepper } from "../Stepper";
import {
	CardActionButton,
	CardControls,
	CardDescription,
	CardImage,
	CardPrice,
	CardTitle,
	StyledDiv,
} from "./styles";

import Heart from "../../assets/icons/Heart.svg";
import Pencil from "../../assets/icons/Pencil.svg";

export function FoodCard({ dish }) {
  const { user } = useAuth();
  return (
    <div>
      <StyledDiv>
        <CardImage src={`http://localhost:3000/uploads/${dish.image}`} />
        <CardTitle href={`/dish/${dish.id}`}>
          {dish.name} {">"}
        </CardTitle>
        <CardDescription>
          {dish.description || "Sem descrição."}
        </CardDescription>
        <CardPrice>
          R${" "}
          {Intl.NumberFormat(undefined, {
            currency: "BRL",
          }).format(dish.price)}
        </CardPrice>

        {user && !user.admin ? (
          <>
            <CardActionButton>
              <img src={Heart} alt="" />
            </CardActionButton>
            <CardControls>
              <Stepper />
              <Button background={theme.COLORS.TOMATO_100}>Incluir</Button>
            </CardControls>
          </>
        ) : (
          <CardActionButton href={`/dish/${dish.id}/edit`}>
            <img src={Pencil} alt="" />
          </CardActionButton>
        )}
      </StyledDiv>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Loader } from "../../components/Loader";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { Stepper } from "../../components/Stepper";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import theme from "../../styles/theme";
import {
  FoodControl,
  FoodImage,
  FoodInfo,
  FoodInfoDescription,
  FoodInfoTitle,
  FoodIngredient,
  FoodIngredients,
  FoodWrapper,
  GoBackButton,
} from "./styles";

export function DishPage() {
  const [dish, setDish] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/dishes/${Number(params.dishId)}`).then((res) => {
      if (res.status !== 200) {
        return setDish("Prato não encontrado");
      }
      setDish(res.data);
    });
  }, []);

  if (!dish) {
    return (
      <PageContainer>
        <Loader />
      </PageContainer>
    );
  }

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <GoBackButton onClick={handleGoBack}>
          <img src={CaretLeft} alt="" /> voltar
        </GoBackButton>

        <FoodWrapper>
          <FoodImage src={`http://localhost:3000/uploads/${dish.image}`} />

          <FoodInfo>
            <FoodInfoTitle>{dish.name}</FoodInfoTitle>
            <FoodInfoDescription>{dish.description}</FoodInfoDescription>

            <FoodIngredients>
              {dish.ingredients &&
                dish.ingredients.map((ingredient, i) => (
                  <FoodIngredient key={i}>{ingredient.name}</FoodIngredient>
                ))}
            </FoodIngredients>

            <FoodControl>
              {user && user.admin ? (
                <Button
                  onClick={() => navigate(`/dish/${dish.id}/edit`)}
                  background={theme.COLORS.TOMATO_100}>
                  Editar prato
                </Button>
              ) : (
                <>
                  <Stepper />
                  <Button background={theme.COLORS.TOMATO_100}>
                    incluir ∙ {"R$"}{" "}
                    {Intl.NumberFormat("pt-BR", { currency: "BRL" }).format(
                      dish.price
                    )}
                  </Button>
                </>
              )}
            </FoodControl>
          </FoodInfo>
        </FoodWrapper>
      </PageContainer>
      <Footer />
    </>
  );
}

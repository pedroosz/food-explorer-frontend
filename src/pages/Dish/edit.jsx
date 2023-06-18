import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { IngredientSelector } from "../../components/IngredientSelector";
import { Loader } from "../../components/Loader";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { api } from "../../services/api";
import {
  DeleteButton,
  FoodEditTitle,
  Form,
  FormButtons,
  FormSection,
  FormSectionContainer,
  GoBackButton,
  SubmitButton,
} from "./styles";

import CaretLeft from "../../assets/icons/CaretLeft.svg";

export function EditDishPage() {
  const navigate = useNavigate();
  const { dishId } = useParams();

  const [dish, setDish] = useState(null);
  const [newCategories, setNewCategories] = useState([]);
  const [newIngredients, setNewIngredients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesResponse = await api.get("/categories");
        setNewCategories(categoriesResponse.data);

        const dishResponse = await api.get(`/dishes/${dishId}`);
        setDish(dishResponse.data);
        setNewIngredients(dishResponse.data.ingredients.map((x) => x.name));
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Erro ao buscar informações do prato.");
      }
    }

    fetchData();
  }, [dishId]);

  const handleDishUpdate = async (e) => {
    e.preventDefault();
    const updateConfirmation = window.confirm(
      "Tem certeza que deseja atualizar este prato?"
    );

    if (updateConfirmation) {
      const data = new FormData(e.currentTarget);

      try {
        await api.put(
          `/dishes/${dishId}`,
          {
            ...Object.fromEntries(data.entries()),
            ingredients: newIngredients,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Prato atualizado");
      } catch (error) {
        console.error("Error updating dish:", error);
        alert("Um erro inesperado ocorreu.");
      }
    }
  };

  const handleDishDelete = async (e) => {
    e.preventDefault();
    const deleteConfirmation = window.confirm(
      "Você tem certeza que deseja deletar este prato?"
    );

    if (deleteConfirmation) {
      try {
        await api.delete(`/dishes/${dish.id}`);
        alert("Prato excluído.");
        navigate("/");
      } catch (error) {
        console.error("Error deleting dish:", error);
        alert("Erro ao excluir prato.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        {!dish ? (
          <Loader />
        ) : (
          <>
            <GoBackButton onClick={() => navigate(`/dish/${dishId}`)}>
              <img src={CaretLeft} alt="" /> voltar
            </GoBackButton>

            <FoodEditTitle>Editar prato</FoodEditTitle>

            <Form onSubmit={handleDishUpdate}>
              <FormSection>
                <FormSectionContainer>
                  <label htmlFor="imageInput">Imagem</label>
                  <input
                    type="file"
                    name="image"
                    id="imageInput"
                    accept=".png, .jpeg, .jpg"
                  />
                </FormSectionContainer>
                <FormSectionContainer>
                  <label htmlFor="nameInput">Nome</label>
                  <input
                    type="text"
                    name="name"
                    id="nameInput"
                    placeholder={dish.name}
                    defaultValue={dish.name}
                  />
                </FormSectionContainer>
                <FormSectionContainer>
                  <label htmlFor="categoryInput">Categoria</label>
                  <select
                    name="category_id"
                    id="categoryInput"
                    defaultValue={dish.category_id}>
                    <option disabled>Crie ou selecione uma opção</option>
                    {newCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </FormSectionContainer>
              </FormSection>

              <FormSection>
                <FormSectionContainer>
                  <label htmlFor="ingredientsInput">Ingredientes</label>
                  <IngredientSelector
                    state={[newIngredients, setNewIngredients]}
                  />
                </FormSectionContainer>
                <FormSectionContainer>
                  <label htmlFor="priceInput">Preço</label>
                  <input
                    type="number"
                    name="price"
                    id="priceInput"
                    min={0}
                    defaultValue={dish.price}
                  />
                </FormSectionContainer>
              </FormSection>

              <FormSection>
                <FormSectionContainer>
                  <label htmlFor="descriptionInput">Descrição</label>
                  <input
                    name="description"
                    id="descriptionInput"
                    maxLength={120}
                    placeholder={dish.description}
                    defaultValue={dish.description}
                  />
                </FormSectionContainer>
              </FormSection>

              <FormButtons>
                <DeleteButton onClick={handleDishDelete}>
                  Excluir prato
                </DeleteButton>
                <SubmitButton>Salvar alterações</SubmitButton>
              </FormButtons>
            </Form>
          </>
        )}
      </PageContainer>
      <Footer />
    </>
  );
}

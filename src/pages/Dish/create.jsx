import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { IngredientSelector } from "../../components/IngredientSelector";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { api } from "../../services/api";
import {
  FoodEditTitle,
  Form,
  FormButtons,
  FormSection,
  FormSectionContainer,
  GoBackButton,
  SubmitButton,
} from "./styles";

import CaretLeft from "../../assets/icons/CaretLeft.svg";

export function CreateDishPage() {
  const navigate = useNavigate();

  const [categorySelectValue, setCategorySelectValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategorySelectChange = (e) => {
    setCategorySelectValue(e.target.value);
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      alert("Erro ao buscar categorias.");
    }
  };

  const submitDish = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (categorySelectValue === "0") {
      const categoryPrompt = prompt("Digite o nome da nova categoria");

      try {
        const categoryResponse = await api.post("/categories", {
          name: categoryPrompt,
        });

        if (categoryResponse.status !== 200) {
          return alert("Erro ao criar categoria.");
        }

        alert("Categoria criada com sucesso.");
        fetchCategories();
        data.set("category", categoryPrompt);
      } catch (error) {
        console.error("Error creating category:", error);
        alert("Erro ao criar categoria.");
      }
    }

    try {
      const dishResponse = await api.post(
        "/dishes",
        { ...Object.fromEntries(data.entries()), ingredients },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (dishResponse.status === 200) {
        alert("Prato criado com sucesso.");
        setIngredients([]);
        setName("");
        setCategorySelectValue("0");
        setPrice(0);
        setDescription("");
      } else {
        alert(dishResponse.data.err.message);
      }
    } catch (error) {
      console.error("Error creating dish:", error);
      alert("Erro ao criar prato.");
    }
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <GoBackButton onClick={handleGoBack}>
          <img src={CaretLeft} alt="" /> voltar
        </GoBackButton>
        <FoodEditTitle>Adicionar prato</FoodEditTitle>
        <Form onSubmit={submitDish}>
          <FormSection>
            <FormSectionContainer>
              <label htmlFor="imageInput">Imagem</label>
              <input type="file" name="image" id="imageInput" />
            </FormSectionContainer>
            <FormSectionContainer>
              <label htmlFor="nameInput">Nome</label>
              <input
                type="text"
                name="name"
                id="nameInput"
                placeholder="Digite aqui..."
                onChange={handleNameChange}
                value={name}
              />
            </FormSectionContainer>
            <FormSectionContainer>
              <label htmlFor="categoryInput">Categoria</label>
              <select
                name="category"
                id="categoryInput"
                onChange={handleCategorySelectChange}
                value={categorySelectValue}>
                <option value="0">Crie ou selecione uma opção</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </FormSectionContainer>
          </FormSection>

          <FormSection>
            <FormSectionContainer>
              <label htmlFor="ingredientsInput">Ingredientes</label>
              <IngredientSelector state={[ingredients, setIngredients]} />
            </FormSectionContainer>
            <FormSectionContainer>
              <label htmlFor="priceInput">Preço</label>
              <input
                type="number"
                name="price"
                id="priceInput"
                min={0}
                value={price}
                onChange={handlePriceChange}
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
                placeholder="Digite aqui..."
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormSectionContainer>
          </FormSection>

          <FormButtons>
            <SubmitButton>Salvar alterações</SubmitButton>
          </FormButtons>
        </Form>
      </PageContainer>
      <Footer />
    </>
  );
}

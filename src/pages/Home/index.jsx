import { useEffect, useState } from "react";
import { FoodSlider } from "../../components/FoodSlider";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageContainer } from "../../components/PageContainer";
import { api } from "../../services/api";
import { HeroImage, HeroSection, HeroText } from "./styles";

import Macarons from "../../assets/macarons.png";

export function HomePage() {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/dishes").then((res) => setDishes(res.data));
    api.get("/categories").then((res) => setCategories(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <PageContainer>
        <HeroSection>
          <HeroImage src={Macarons} />

          <HeroText>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </HeroText>
        </HeroSection>

        {categories &&
          categories.map((categoria) => (
            <FoodSlider
              title={categoria.name}
              key={categoria.id}
              data={
                dishes && dishes.filter((x) => x.category_id === categoria.id)
              }
            />
          ))}
      </PageContainer>
      <Footer />
    </>
  );
}

import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 2rem 1rem;
  margin: 0 auto;
  height: calc(100vh - 7rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const GoBackButton = styled.button`
  font-weight: bolder;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    font-size: 1rem;
  }
`;

export const FoodEditTitle = styled.h1`
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
  }
`;

export const FoodWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    flex-direction: column;
    margin: 2rem;
  }
`;

export const FoodImage = styled.img`
  width: 390px;
  border-radius: 999px;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    width: min(100%, 264px);
  }
`;

export const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Poppins", sans-serif;
`;

export const FoodInfoTitle = styled.h1`
  font-weight: 500;
  font-size: 2.2rem;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    font-size: 1.5rem;
  }
`;

export const FoodInfoDescription = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    font-size: 1rem;
  }
`;

export const FoodIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`;

export const FoodIngredient = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.3rem;
`;

export const FoodControl = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;

  > button {
    width: 100% !important;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input,
  textarea,
  select {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 0.9rem 0.95rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1rem;
  }
`;

export const FormSection = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    flex-direction: column;
    align-items: normal;
  }
`;

export const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;

  > label {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 0.9rem 1rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  border-radius: 0.2rem;
  font-size: 0.9rem;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.9rem 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.2rem;
  font-size: 0.9rem;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    width: 100%;
  }
`;

export const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  height: 100%;

  > h1 {
    font-size: 1.6rem;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

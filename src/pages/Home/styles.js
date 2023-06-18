import { styled } from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  margin: 4rem 0;

  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.DARK_900},
    ${({ theme }) => theme.COLORS.DARK_600}
  );
  max-width: 1100px;
  height: 300px;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    height: 120px;
    margin: 2rem 0;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  bottom: 0;
  left: -3rem;

  width: 500px;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    width: 250px;
  }
`;

export const HeroText = styled.div`
  position: absolute;
  right: 2rem;
  max-width: 50%;

  display: flex;
  flex-direction: column;

  > p {
    font-size: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    > h1 {
      font-size: 1rem;
    }

    > p {
      font-size: 0.8rem;
    }
  }
`;

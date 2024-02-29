import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;

  width: 100%;
  margin: 0 auto;

  .headercontent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 0 auto;
    padding: 40px 100px;
    background-color: rgba(255, 255, 255, 0.575);

    .link {
      color: black;
      text-decoration: none;
      font-size: 32px;
      font-weight: 700;
      padding: 10px 80px;
      background-color: brown;
      border-radius: 80px;
      transition: 0.5s;

      &:hover {
        color: white;
      }
    }
  }
`;

export const FormStyle = styled.form`
  maxwidth: 1440px;
  width: 100%;
  margin: 160px auto 0;
  display: flex;
  justify-content: center;

  .Search {
    width: 90%;
    border-radius: 50px;
    height: 45px;
    border: 2px solid black;
    padding-left: 40px;
  }
`;

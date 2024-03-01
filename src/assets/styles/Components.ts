import styled from "styled-components";

// Header styles

export const HeaderStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;

  .headercontent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 40px;
    padding: 35px;
    background-color: #071220;

    .link {
      color: white;
      text-decoration: none;
      font-size: 22px;
      font-weight: 500;
      padding: 10px 60px;
      background-color: transparent;
      border-radius: 40px;
      transition: 0.5s;
      border: 2px solid #e03f3f;
      text-shadow: 2px 2px 5px #e03f3f;
      box-shadow: 1px 1px 8px #e03f3f;

      &:hover {
        color: #e03f3f;
        background-color: #33221e;
      }
    }

    @media screen and (max-width: 660px) {
      gap: 0;
      justify-content: space-evenly;

      .link {
        padding: 10px 20px;
        font-size: 18px;
      }
    }

    @media screen and (max-width: 660px) {
      .link {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;

// Search Form Styles

export const FormStyle = styled.form`
  margin: 160px 0 80px;
  display: flex;
  justify-content: center;

  .Search {
    width: 90%;
    border-radius: 10px;
    height: 45px;
    border: 3px solid #e03f3f;
    padding-left: 20px;
    box-shadow: 1px 1px 8px #e03f3f;

    @media screen and (max-width: 660px) {
      width: 70%;
    }
  }
`;

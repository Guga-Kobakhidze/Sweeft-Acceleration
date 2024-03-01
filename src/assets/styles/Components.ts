import styled from "styled-components";

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
    padding: 40px 40px;
    background-color: rgba(255, 255, 255, 0.575);

    .link {
      color: white;
      text-decoration: none;
      font-size: 32px;
      font-weight: 500;
      padding: 20px 60px;
      background-color: #181818;
      border-radius: 5px;
      transition: 0.5s;

      &:hover {
        color: white;
        background-color: #33221e;
      }
    }
  }
`;

export const FormStyle = styled.form`
  margin: 160px 0 80px;
  display: flex;
  justify-content: center;

  .Search {
    width: 90%;
    border-radius: 10px;
    height: 45px;
    border: 2px solid black;
    padding-left: 20px;
  }
`;

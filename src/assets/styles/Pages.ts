import styled from "styled-components";

// Styles for main and hystory page container

export const MainPageStyle = styled.div`
  margin: 40px 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  .card {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    height: 300px;
    ovject: cover;

    &:hover {
      box-shadow: 5px 5px 20px #e03f3f;
    }

    h1 {
      position: absolute;
      left: 50%;
      top: 80%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 250px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

// Styles for laoding

export const Loading = styled.div`
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: white;
  z-index: 999;
`;

// Styles for CardModal

export const CardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: black;
  z-index: 51;

  width: 1200px;
  height: 600px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;

  .details {
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
    justify-content: center;
    opacity: 1;
    transition: width 0.3s ease, opacity 0.3s ease;

    p {
      font-size: 32px;
      margin: 0;
    }
  }

  img {
    width: 750px;
    height: 100%;
    object-fit: cover;
    justify-content: start;
    transition: width 0.5s ease;
  }

  .icon {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: brown;
    }
  }
`;

// styles for overlay

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
`;

// Styles for Hystory Page container

export const HistoryStyle = styled.div`
  margin: 160px 0 80px 80px;
  display: flex;
  flex-wrap: wrap;

  select {
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    color: #33333;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 2px 2px 8px #e03f3f;
  }

  h1 {
    margin-left: 20px;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0;
    select {
      margin: 0 auto;
    }
    h1 {
      margin: 0 auto;
      text-align: center;
    }
  }

  @media screen and (max-width: 636px) {
    h1 {
      order: -1;
      margin-bottom: 20px;
    }
  }
`;

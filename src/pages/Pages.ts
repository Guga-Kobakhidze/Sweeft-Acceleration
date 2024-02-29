import styled from "styled-components";

export const Container = styled.div`
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
      box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.3);
    }

    h1 {
      position: absolute;
      left: 50%;
      top: 80%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 250px;
      font-size: 20px;
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

export const Loading = styled.div`
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: black;
  z-index: 9999;
`;

export const CardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: black;
  z-index: 51;

  width: 900px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    justify-content: start;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

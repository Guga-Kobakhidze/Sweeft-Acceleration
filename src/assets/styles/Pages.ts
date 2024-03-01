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
  z-index: 999;
`;

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
    transition: width 0.3s ease;
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
`;

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
  }

  h1 {
    margin-left: 20px;
  }
`;

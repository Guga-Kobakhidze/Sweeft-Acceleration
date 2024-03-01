import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const HistoryPage: React.FC = () => {
  const [value] = useLocalStorage<string[]>("ValueKeys", []);

  const onClick = (val: string) => {
    console.log(val);
  };

  return (
    <div>
      {value.map((searched) => (
        <div key={searched}>
          <h1 onClick={() => onClick(searched)}>{searched}</h1>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;

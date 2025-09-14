import { useEffect, useState } from "react";

function RandomColor() {
  const [typeOFColor, setTypeOFColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomcolorHandler = () => {
    if (typeOFColor === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let newColor = "#";
      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length);
        newColor += hex[index];
      }
      console.log(newColor);
      setColor(newColor);
    } else {
      const red = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      setColor(`rgb(${red},${blue},${green})`);
    }
  };
  const changeColorTypeHandler = (type) => {
    if (typeOFColor != type) {
      setTypeOFColor(type);
    }
  };

  useEffect(() => {
    generateRandomcolorHandler();
  }, [typeOFColor]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        with: "100vw",
        height: "100vh",
        background: color,
        gap: "200px",
      }}
    >
      <div>
        <button onClick={() => changeColorTypeHandler("hex")}>
          Create HEX Color
        </button>
        <button onClick={() => changeColorTypeHandler("rgb")}>
          Create RGB Color
        </button>
        <button onClick={generateRandomcolorHandler}>
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          color: "white",
          fontSize: "44px",
          fontWeight: "600",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p style={{ margin: "0" }}>
          {typeOFColor === "hex" ? "HEX Color" : "RGB Color"}
        </p>
        <p style={{ margin: "0" }}>{color}</p>
      </div>
    </div>
  );
}

export default RandomColor;

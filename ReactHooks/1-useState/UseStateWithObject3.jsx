import { useState } from 'react';

const UseStateWithObject3 = () => {
  const [car, setCar] = useState({
    brand: 'BMW',
    model: 'x5',
    color: 'red',
    year: 2025,
  });

  // Function to change the color of the car , using spread operator(break existing reference and pass new object)
  const changeColor1 = () => {
    // setCar({ color: 'red' }); // wrong way , it modify the whole ar obj
    /**
     * Bad practice :
     * const [brand, setBrand ] = useState("BMW");
     * const [color, setColor] = useState("red");
     * .....
     */
    setCar({ ...car, color: 'Green' });
  };

  // Function to change the color of the car , using callback function
  const changeColor2 = () => {
    // REACT INTERNALLY : Theek hai, tu callback de raha hai. Main apni latest state tujhe prev ke naam se de deta hoon.
    setCar((prev) => {
      return { ...prev, color: 'Blue' };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It's a {car.color} {car.model} from year {car.year}
      </p>
      <button onClick={changeColor1}>Change color Green</button>
      <hr />
      <button onClick={changeColor2}>Change color Blue</button>
    </>
  );
};

export default UseStateWithObject3;

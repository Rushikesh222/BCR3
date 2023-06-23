import { useState } from "react";
import { snacks } from "../../Data/Data";
import "./Home.css";

export const SnackTable = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const searchData = snacks.filter(
    (items) =>
      items.product_name.toLowerCase().includes(search) ||
      items.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(search)
      )
  );
  return (
    <div>
      <input type="text" onChange={handleSearch} />

      <table>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Weight</th>
          <th>Price(INR)</th>
          <th>Calories</th>
          <th>ingredients</th>
        </tr>
        <tbody>
          {searchData.map((items) => {
            const {
              id,
              product_name,
              product_weight,
              price,
              calories,
              ingredients,
            } = items;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{product_weight}</td>
                <td>{price}</td>
                <td>{calories}</td>
                <td
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  {ingredients.map((get) => (
                    <p>{get}</p>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

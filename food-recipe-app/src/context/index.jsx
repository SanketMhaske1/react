import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [serachParam, setSerachParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setfavoritesList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${serachParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSerachParam("");
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setSerachParam("");
      setErrorMessage(error.message);
      console.log("Fail To Fetch Data", error.message);
    }
  }
  function handleAddToFavorites(getCurrentItem) {
    console.log("favoritesList", favoritesList);
    let copyFavoritesList = [...favoritesList];
    let index = copyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      copyFavoritesList.push(getCurrentItem);
    } else {
      copyFavoritesList.splice(index);
    }
    setfavoritesList(copyFavoritesList);
  }
  return (
    <GlobalContext.Provider
      value={{
        serachParam,
        loading,
        recipeList,
        setSerachParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        setfavoritesList,
        handleAddToFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

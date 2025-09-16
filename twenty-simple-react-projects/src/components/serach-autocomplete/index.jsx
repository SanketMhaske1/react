import React, { useEffect, useState } from "react";
import Suggesstion from "./suggesstion";

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [serachParam, setSerachParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      setUsers(data.users.map((userItem) => userItem.firstName));
      setLoading(false);
    } catch (error) {
      console.log("Fail To featch Data", error);
      setLoading(false);
      setErrorMessage(error.message);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSerachParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length > 0
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filterData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);
    setShowDropdown(false);
    setSerachParam(event.target.innerText);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading data! Please Wait</div>;
  if (errorMessage !== "") return <div>{errorMessage}</div>;

  return (
    <div className="serach-auotcompete-container">
      <input
        value={serachParam}
        onChange={handleChange}
        name="serach-users"
        placeholder="Serach User here..."
      />
      {showDropdown && (
        <Suggesstion data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
}

export default SearchAutocomplete;

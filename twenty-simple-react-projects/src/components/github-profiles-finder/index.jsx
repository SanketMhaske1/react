import React, { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

function GithubProfileFinder() {
  const [userName, setUserName] = useState("SanketMhaske1");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const handleSubmit = () => {
    fetchUserData();
  };

  async function fetchUserData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
      setUserName("");
    } catch (error) {
      console.log("Fail To Fetch Data Of User", error.message);
      setLoading(false);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <div>Loading data! Please Wait</div>;
  if (errorMessage !== "") return <div>{errorMessage}</div>;

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="serach-by-username"
          type="text"
          placeholder="Serach Github Username..."
        />
        <button onClick={handleSubmit}>Serach</button>
      </div>
      <div>{userData !== null ? <User user={userData} /> : null}</div>
    </div>
  );
}

export default GithubProfileFinder;

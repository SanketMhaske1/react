import React, { useEffect, useState } from "react";

function Github() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/hiteshchoudhary`)
      .then((res) => res.json())
      .then((res) => {
        setUserData(res);
      })
      .catch((error) => {
        console.log("Failed To fetch Git", error);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-3 text-3xl">
      Github followers : {userData?.followers}
      <img src={userData?.avatar_url} alt="git pic" width={300} />
    </div>
  );
}

export default Github;

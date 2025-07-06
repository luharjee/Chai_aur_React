// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div>
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt="git-proile" width={300} />
    </div>
  );
};

export default GitHub;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};

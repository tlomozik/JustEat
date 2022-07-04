import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          //   term: searchTerm,
          location: "Katowice",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  //   useEffect(() => {
  //     searchApi("");
  //   }, []);

  return [searchApi, results, errorMessage];
};

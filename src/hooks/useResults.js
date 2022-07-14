import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (location, category) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          location: location,
          categories: category,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return [searchApi, results, errorMessage];
};

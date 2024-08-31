"use client";

import { getProducts } from "@/utils";
import React, { useEffect, useState } from "react";

type QueryProps = string;
const useMediaQuery = (query: QueryProps) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== match) {
      setMatch(media.matches);
    }
    const listener = () => {
      setMatch(media.matches);
    };
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [match, query]);

  return match;
};

const useGetLocalStorageData = (dataKey: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const storedData = window.localStorage.getItem(dataKey);
      const parsedData = storedData ? JSON.parse(storedData) : [];
      setData(parsedData);
      setLoading(false);
    };

    fetchData();
  }, [dataKey]);

  return { data, loading };
};
export { useMediaQuery, useGetLocalStorageData };

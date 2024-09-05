"use client";

import React, { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { ProductDataProps } from "@/types";

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

const useGetFireStoreData = (collectionName: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const dataCollectionRef = collection(db, collectionName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList = await getDocs(dataCollectionRef);
        const allData = dataList.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(allData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, dataCollectionRef]);

  return { data, loading };
};
export { useMediaQuery, useGetFireStoreData };

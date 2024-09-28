"use client";
import { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

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

  const fetchData = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, loading, refetch };
};

const useOnlineStatus = () => {
  const [onLine, setOnLine] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnLine = () => setOnLine(true);
    const handleOffLine = () => setOnLine(false);

    window.addEventListener("online", handleOnLine);
    window.addEventListener("offline", handleOffLine);

    return () => {
      window.removeEventListener("online", handleOnLine);
      window.removeEventListener("offline", handleOffLine);
    };
  }, []);

  return onLine;
};
export { useMediaQuery, useGetFireStoreData, useOnlineStatus };

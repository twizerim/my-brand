import { useState, useEffect } from "react";
import { useGetUsersQuery } from "../../redux/apiSlice";

export const useGetUsers = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (data && data.users) {
      setUserData(data.users);
    }
  }, [data]);

  return {
    userData,
    isLoading,
    error,
  };
};
import React, { createContext, useEffect, useState } from "react";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const addToList = (item) => {
    setUser((prev) => [...prev, { item, done: false, edit: false }]);
  };

  const doneJob = (item) => {
    setUser((prev) =>
      prev.map((userItem) =>
        userItem.item === item
          ? { ...userItem, done: !userItem.done }
          : userItem
      )
    );
  };

  const removeItem = (item) => {
    setUser((prev) => prev.filter((userItem) => item !== userItem.item));
  };

  const update = (item, isEditing = false) => {
    setUser((prev) =>
      prev.map((userItem) =>
        userItem.item === item
          ? { ...userItem, edit: isEditing }
          : { ...userItem, edit: false } // Reset others
      )
    );
  };

  const updateValue = (item, newValue) => {
    setUser((prev) =>
      prev.map((userItem) =>
        userItem.item === item ? { ...userItem, item: newValue } : userItem
      )
    );
  };

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if(storedUser && storedUser.length > 0)
    {
        setUser(storedUser);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ListContext.Provider
      value={{ addToList, user, doneJob, removeItem, update, updateValue }}
    >
      {children}
    </ListContext.Provider>
  );
};

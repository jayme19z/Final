import React from "react";

import styles from "./Search.module.scss";

import { searchContext } from "../../App";

export const Search = () => {
  const { searchType, setSearchType } = React.useContext(searchContext);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 50 50"
        height="20px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="15px"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#2d2d2d"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <line
          fill="none"
          stroke="#2d2d2d"
          stroke-miterlimit="10"
          stroke-width="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        value={searchType}
        onChange={(event) => setSearchType(event.target.value)}
        className={styles.search}
        placeholder="Поиск"
      />
      {searchType && (
        <svg
          onClick={() => setSearchType("")}
          className={styles.cross}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Capa 1"
          id="Capa_1"
          viewBox="0 0 20 19.84"
        >
          <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
        </svg>
      )}
    </div>
  );
};

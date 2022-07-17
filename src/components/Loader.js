import React from 'react';
import styles from "./Loader.module.css"; 

// Gif
import spinner from "../gif/spinner.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Loading" />
            <h1 className={styles.loading}>Loading... </h1>
            <h1 className={styles.loading}> Please Wait... </h1>
        </div>
    );
};

export default Loader;
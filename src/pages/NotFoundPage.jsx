import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.content}>
        <h1 className={styles.errCode}>404</h1>
        <h2 className={styles.errTitle}>Page Not Found</h2>
        <p className={styles.errText}>
          The requested corporate URL could not be located on Avantee Industries servers.
        </p>
        <Link to="/" className="btn-gold">
          <FaHome />
          <span>Return To Homepage</span>
        </Link>
      </div>
    </div>
  );
};

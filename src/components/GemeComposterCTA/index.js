import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function GemeComposterCTA({className}) {
  return (
    <div className={clsx(styles.ctaContainer, className)}>
      <div className={styles.ctaContent}>
        <a href="https://www.geme.bio/product/geme" className={styles.imageLink}>
          <img 
            src="/img/geme-kitchen-composter.png" 
            alt="GEME Kitchen Composter" 
            className={styles.productImage}
          />
        </a>
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>GEME, the Best Biowaste Composter</h3>
          <h3 className={styles.offerTitle}>🌟 Limited Time Offer: Save $50</h3>
          <div className={styles.featuresList}>
            <p className={styles.feature}>✅ Large Capacity 19L, Quiet, Odourless</p>
            <p className={styles.feature}>✅ Quick (6-8 hours), Microbes Compost, Full Compost</p>
            <p className={styles.feature}>✅ 30-Day Risk-Free Trial, One Year Warranty</p>
          </div>
        </div>
        <a 
          href="https://www.geme.bio/product/geme" 
          className={styles.ctaButton}
        >
          🛒 Shop GEME Composter Now
        </a>
      </div>
    </div>
  );
} 
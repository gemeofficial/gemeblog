import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function GemeComposterCTA({
  className,
  href = "https://www.geme.bio/product/geme?utm_medium=blog&utm_source=geme_website&utm_campaign=general_seo_content&utm_content=how-to-eat-lychee-best-lychee-taste-guide",
  imgSrc = "/img/geme-kitchen-composter.png",
  imgAlt = "GEME Kitchen Composter",
  productTitle = "GEME, the Best Biowaste Composter",
  features = [
    "✅ Large Capacity 19L, Quiet, Odourless",
    "✅ Quick (6-8 hours), Microbes Compost, Full Compost",
    "✅ 30-Day Risk-Free Trial, One Year Warranty"
  ],
  buttonText = "🛒 Shop GEME Composter Now"
}) {
  return (
    <div className={clsx(styles.ctaContainer, className)}>
      <div className={styles.ctaContent}>
        <a href={href} target="_blank" className={styles.imageLink}>
          <img
            src={imgSrc}
            alt={imgAlt}
            className={styles.productImage}
          />
        </a>
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{productTitle}</h3>
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <p key={index} className={styles.feature}>{feature}</p>
            ))}
          </div>
        </div>
        <a
          target="_blank"
          href={href}
          className={styles.ctaButton}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
} 
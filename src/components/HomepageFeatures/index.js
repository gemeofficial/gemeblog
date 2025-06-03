import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'FAQ',
    Svg: require('@site/static/img/box-1-questions.svg').default,
    description: (
      <>
        Search answer, solve your concerns.
      </>
    ),
    link: '/help-center/docs/category/faq',
  },
  {
    title: 'Why GEME Worth?',
    Svg: require('@site/static/img/box-2-champion.svg').default,
    description: (
      <>
        Understand how GEME matches it's expensive.
      </>
    ),
    link: 'https://www.geme.bio/blogs/what-is-the-difference-between-geme-composter-and-other-electric-kitchen-composters',
  },
  {
    title: 'Shipping & Order',
    Svg: require('@site/static/img/box-3-shipping.svg').default,
    description: (
      <>
        Don't worry, your orders are always tracked.
      </>
    ),
    link: '/help-center/docs/orders-and-shipping',
  },
  {
    title: 'Warranty & Return Policy',
    Svg: require('@site/static/img/box-4-warranty.svg').default,
    description: (
      <>
        We have warranty for you to shop confidently.
      </>
    ),
    link: '/help-center/docs/warranty-and-return',
  },
  {
    title: 'Repair & Replace',
    Svg: require('@site/static/img/box-5-repair.svg').default,
    description: (
      <>
        We can fix it, in case we have to.
      </>
    ),
    link: '/help-center/docs/category/repair--replace',
  },
  {
    title: 'Customer Support',
    Svg: require('@site/static/img/box-6-customer-support.svg').default,
    description: (
      <>
        Don't hesitate to reach us for help.
      </>
    ),
    link: '/help-center/docs/customer-support',
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} rel="nofollow">
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={link} rel="nofollow">
            {title}
          </a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

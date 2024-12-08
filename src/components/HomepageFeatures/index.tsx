import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Origins',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This guide is built from the work of TailsMK4 on the Emerald Rogue Discord, with the aims of making contributing to the guide more accessible, & improving the presentation accross a variety of devices.
      </>
    ),
  },
  {
    title: 'Early Days',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Currently this is not much more than the scaffolding website, please be patient as it is built upon.
      </>
    ),
  },
  {
    title: 'Focussed on the EX Version',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        As with the current guide, this will be focussed on the expansion version, and in future may tailor itself to leading fan patches, this may be implemented with a version dropdown - but at a minimum the changelog will be made avaialble.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

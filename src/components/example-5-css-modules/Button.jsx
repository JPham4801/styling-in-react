// src/components/example-5-css-modules/Button.jsx

import styles from './button.module.css';

const Button = ({ buttonText }) => {
  return <button className={styles.btn}>{buttonText}</button>;
};

export default Button;

// benefits classnames are scoped to the component we don't run into
// conflict very often
// pitfalls
// elements and ids are still global -> we have to plan
// our css
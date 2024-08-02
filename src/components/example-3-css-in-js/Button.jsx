import { createUseStyles } from "react-jss";

const Button = ({ buttonText }) => {
  const styles = createUseStyles({
    // the key is the class name
    btn: {
      // key/value pairs of the styles we want
      backgroundColor: '#24292e', // adding the styles in the object that we'll apply to our button
      borderRadius: '8px',
      color: '#f7df1c',
      fontSize: '24pt',
      padding: '15px 50px',
      width: '300px',
    },
  });
  
  const classes = styles();

  return <button className={classes.btn}>{buttonText}</button>;
};

export default Button;

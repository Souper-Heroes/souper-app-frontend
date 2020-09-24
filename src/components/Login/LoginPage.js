import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/MaterialKitComponents/Grid/GridContainer.js";
import GridItem from "components/MaterialKitComponents/Grid/GridItem.js";
import Button from "components/MaterialKitComponents/CustomButtons/Button.js";
import Card from "components/MaterialKitComponents/Card/Card.js";
import CardBody from "components/MaterialKitComponents/Card/CardBody.js";
import CardHeader from "components/MaterialKitComponents/Card/CardHeader.js";

import CardFooter from "components/MaterialKitComponents/Card/CardFooter.js";
import CustomInput from "components/MaterialKitComponents/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/board.jpg";

import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
      >
        <div className={classes.container}>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <GridContainer justify="center">
                    <Link to="/ForgottenPassword" className={classes.link}>
                      <Button
                          simple
                          color="info"
                          size="lg"
                          to="/ForgottenPassword"
                      >
                        FORGOTTEN PASSWORD?
                      </Button>
                    </Link>
                  </GridContainer>
                  <CardFooter className={classes.cardFooter}>
                    <Button variant="contained" color="rose" size="lg">
                      <Link to="/">
                        LOG IN
                      </Link>
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    <Button variant="contained" color="default" size="lg">
                      <Link to="/register">
                        REGISTER
                      </Link>
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>

          </div>
        </div>
    </div>
  );
}

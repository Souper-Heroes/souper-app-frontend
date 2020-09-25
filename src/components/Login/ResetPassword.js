import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Lock from "@material-ui/icons/Lock";
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
import image from "assets/img/citrus-fruit.jpg";

const useStyles = makeStyles(styles);

export default function ResetPassword(props) {
   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >

    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={10} sm={8} md={4}>
          <Card className={classes[cardAnimaton]}>
            <form className={classes.form}>
              <CardHeader color="rose" className={classes.cardHeader}>
                <h4>Reset Password</h4>   
              </CardHeader>
              <CardBody>
               
                <CustomInput
                  labelText="New Password"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Lock className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  labelText="Reenter Password"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Lock className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                  }}
                />
                
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button fullWidth to="#TODO_Send email" variant="contained" color="rose" size="lg">
                  Reset Password
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

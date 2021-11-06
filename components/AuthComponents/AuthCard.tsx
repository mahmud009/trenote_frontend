import { Grid, Divider, useBreakpointValue, Fade } from "@chakra-ui/react";
import { Card } from "components/Card";
import { AuthCardElements } from "components/AuthComponents/AuthCardElements";
import { AuthSignUpForm } from "components/AuthComponents/AuthSignUpForm";
import { AuthLoginForm } from "components/AuthComponents/AuthLoginForm";
import { AuthType } from "types";

type OrientationType = "horizontal" | "vertical";
interface PropTypes {
  authMode: AuthType;
}

export const AuthCard = ({ authMode }: PropTypes): JSX.Element => {
  const dividerOrientation = useBreakpointValue({
    base: "horizontal",
    md: "vertical",
  });
  const isLogin = authMode === "login";

  return (
    <Fade
      in={true}
      style={{
        width: "100%",
        transitionDuration: "0.4s",
      }}
    >
      <Card shadow="2xl">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1px 1fr" }}
          templateRows={{ base: "150px 1px 1fr", md: "1fr" }}
        >
          <AuthCardElements />
          <Divider orientation={dividerOrientation as OrientationType} />
          {isLogin ? <AuthLoginForm /> : <AuthSignUpForm />}
        </Grid>
      </Card>
    </Fade>
  );
};

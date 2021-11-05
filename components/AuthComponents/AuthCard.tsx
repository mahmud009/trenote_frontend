import { Grid, Divider, useBreakpointValue } from "@chakra-ui/react";
import { Card } from "components/Card";
import { AuthCardElements } from "components/AuthComponents/AuthCardElements";
import { AuthSignUpForm } from "./AuthSignUpForm";

type OrientationType = "horizontal" | "vertical";

export const AuthCard = (): JSX.Element => {
  const dividerOrientation = useBreakpointValue({
    base: "horizontal",
    md: "vertical",
  });

  return (
    <Card>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1px 1fr" }}
        templateRows={{ base: "150px 1px 1fr", md: "1fr" }}
      >
        <AuthCardElements />
        <Divider orientation={dividerOrientation as OrientationType} />
        <AuthSignUpForm />
      </Grid>
    </Card>
  );
};

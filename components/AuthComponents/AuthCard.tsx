import { Grid, Divider } from "@chakra-ui/react";
import { Card } from "components/Card";
import { AuthCardElements } from "components/AuthComponents/AuthCardElements";
import { AuthSignUpForm } from "./AuthSignUpForm";

export const AuthCard = (): JSX.Element => {
  return (
    <Card>
      <Grid templateColumns="1fr 1px 1fr">
        <AuthCardElements />
        <Divider orientation="vertical" />
        <AuthSignUpForm />
      </Grid>
    </Card>
  );
};

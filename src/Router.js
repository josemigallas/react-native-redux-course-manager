import React from "react";
import { Stack, Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar initial>
        <Stack key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Stack>

        <Stack key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;

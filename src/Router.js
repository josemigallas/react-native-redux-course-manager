import React from "react";
import { Stack, Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Stack key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Stack>
        <Stack key="main">
          <Scene key="employeeList" component={EmployeeList} title="Employees" />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;

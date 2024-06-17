import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MenteeList } from "./mentee/MenteeList";
import { MenteeCreate } from "./mentee/MenteeCreate";
import { MenteeEdit } from "./mentee/MenteeEdit";
import { MenteeShow } from "./mentee/MenteeShow";
import { PairingList } from "./pairing/PairingList";
import { PairingCreate } from "./pairing/PairingCreate";
import { PairingEdit } from "./pairing/PairingEdit";
import { PairingShow } from "./pairing/PairingShow";
import { MentorList } from "./mentor/MentorList";
import { MentorCreate } from "./mentor/MentorCreate";
import { MentorEdit } from "./mentor/MentorEdit";
import { MentorShow } from "./mentor/MentorShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Drapp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Mentee"
          list={MenteeList}
          edit={MenteeEdit}
          create={MenteeCreate}
          show={MenteeShow}
        />
        <Resource
          name="Pairing"
          list={PairingList}
          edit={PairingEdit}
          create={PairingCreate}
          show={PairingShow}
        />
        <Resource
          name="Mentor"
          list={MentorList}
          edit={MentorEdit}
          create={MentorCreate}
          show={MentorShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

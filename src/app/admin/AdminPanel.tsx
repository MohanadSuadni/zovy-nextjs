"use client";

import * as React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { PlanList, PlanEdit, PlanCreate } from "../components/admin/PlanResources";

// 🔹 Online JSON server URL
const dataProvider = simpleRestProvider(
  "https://my-json-server.typicode.com/MohanadSuadni/zovy-database"
);

const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="plans"
      list={PlanList}
      edit={PlanEdit}
      create={PlanCreate}
    />
  </Admin>
);

export default AdminPanel;
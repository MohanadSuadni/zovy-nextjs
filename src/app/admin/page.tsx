"use client"; // 🔹 mora biti prvi red

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PlanList, PlanEdit, PlanCreate } from "@/app/components/admin/PlanResources";

// 🔹 Online JSON server URL
const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/MohanadSuadni/zovy-database"
);

export default function AdminPage() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="plans"
        list={PlanList}
        edit={PlanEdit}
        create={PlanCreate}
      />
    </Admin>
  );
}
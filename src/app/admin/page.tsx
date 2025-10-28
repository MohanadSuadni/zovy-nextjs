"use client";                // obavezno staviti
export const dynamic = "force-dynamic";  // sprečava SSR/prerender

import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PlanList, PlanEdit, PlanCreate } from "@/app/components/admin/PlanResources";

const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/MohanadSuadni/zovy-database"
);

export default function AdminPage() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="plans" list={PlanList} edit={PlanEdit} create={PlanCreate} />
    </Admin>
  );
}
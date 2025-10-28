"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PlanList, PlanEdit, PlanCreate } from "@/app/components/admin/PlanResources";

// Tvoj JSON server
const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/MohanadSuadni/zovy-database"
);

export default function AdminPage() {
  if (typeof document === "undefined") {
    return <p>Loading...</p>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="plans" list={PlanList} edit={PlanEdit} create={PlanCreate} />
    </Admin>
  );
}
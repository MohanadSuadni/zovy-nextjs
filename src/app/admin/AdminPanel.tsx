"use client";

import * as React from "react";
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  ImageField,
  Create,
  SimpleForm,
  TextInput
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider("http://localhost:3002");

export const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="images"
      list={() => (
        <List>
          <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Naslov" />
            <TextField source="description" label="Opis" />
            <ImageField source="url" label="Slika" />
          </Datagrid>
        </List>
      )}
      create={() => (
        <Create>
          <SimpleForm>
            <TextInput source="title" label="Naslov" />
            <TextInput source="description" label="Opis" />
            <TextInput source="url" label="URL slike" />
          </SimpleForm>
        </Create>
      )}
    />
  </Admin>
);
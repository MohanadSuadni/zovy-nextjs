"use client"; // 🔹 React-admin mora biti client-side

import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create,
} from "react-admin";

// 🔹 LISTA PLANOVA
export const PlanList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="heading" label="Naziv paketa" />
      <TextField source="price" label="Cena (RSD)" />
      <TextField source="voyo" label="Voyo" />
      <TextField source="przina" label="Opis paketa" />
      <TextField source="user" label="Korisnici" />
    </Datagrid>
  </List>
);

// 🔹 EDIT PLANOVA
export const PlanEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="heading" label="Naziv paketa" />
      <NumberInput source="price" label="Cena (RSD)" />
      <TextInput source="voyo" label="Voyo" />
      <TextInput source="przina" label="Opis paketa" />
      <TextInput source="user" label="Korisnici" />
      <TextInput source="imgSrc" label="URL slike" />
      <TextInput source="features.Najgledaniji" label="Najgledaniji" />
      <TextInput source="features.Premotavanje" label="Premotavanje" />
      <TextInput source="features.Gledaj" label="Gledaj" />
      <TextInput source="features.Prvi" label="Prvi" />
    </SimpleForm>
  </Edit>
);

// 🔹 KREIRANJE NOVOG PLANA
export const PlanCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="heading" label="Naziv paketa" />
      <NumberInput source="price" label="Cena (RSD)" />
      <TextInput source="voyo" label="Voyo" />
      <TextInput source="przina" label="Opis paketa" />
      <TextInput source="user" label="Korisnici" />
      <TextInput source="imgSrc" label="URL slike" />
      <TextInput source="features.Najgledaniji" label="Najgledaniji" />
      <TextInput source="features.Premotavanje" label="Premotavanje" />
      <TextInput source="features.Gledaj" label="Gledaj" />
      <TextInput source="features.Prvi" label="Prvi" />
    </SimpleForm>
  </Create>
);
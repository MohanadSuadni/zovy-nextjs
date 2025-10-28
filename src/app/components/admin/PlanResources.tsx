"use client";

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create,
} from "react-admin";

// ✅ LISTA PLANOVA
export const PlanList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="heading" label="Naziv paketa" />
      <NumberField source="price" label="Cena (RSD)" />
      <TextField source="voyo" label="Voyo" />
      <TextField source="przina" label="Brzina" />
      <TextField source="user" label="Korisnici" />
    </Datagrid>
  </List>
);

// ✅ IZMENI PLAN
export const PlanEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="heading" label="Naziv paketa" />
      <NumberInput source="price" label="Cena (RSD)" />
      <TextInput source="voyo" label="Voyo" />
      <TextInput source="przina" label="Brzina" />
      <TextInput source="user" label="Korisnici" />
      <TextInput source="imgSrc" label="URL slike" />
      <TextInput source="features.Najgledaniji" label="Najgledaniji" />
      <TextInput source="features.Premotavanje" label="Premotavanje" />
      <TextInput source="features.Gledaj" label="Gledaj" />
      <TextInput source="features.Prvi" label="Prvi" />
    </SimpleForm>
  </Edit>
);

// ✅ DODAJ NOVI PLAN
export const PlanCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="heading" label="Naziv paketa" />
      <NumberInput source="price" label="Cena (RSD)" />
      <TextInput source="voyo" label="Voyo" />
      <TextInput source="przina" label="Brzina" />
      <TextInput source="user" label="Korisnici" />
      <TextInput source="imgSrc" label="URL slike" />
      <TextInput source="features.Najgledaniji" label="Najgledaniji" />
      <TextInput source="features.Premotavanje" label="Premotavanje" />
      <TextInput source="features.Gledaj" label="Gledaj" />
      <TextInput source="features.Prvi" label="Prvi" />
    </SimpleForm>
  </Create>
);
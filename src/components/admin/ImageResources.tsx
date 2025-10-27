// src/components/admin/ImageResources.tsx
import { List, Datagrid, TextField, ImageField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ImageList = () => (
  <List resource="images">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ImageField source="url" label="Image" />
    </Datagrid>
  </List>
);

export const ImageCreate = () => (
  <Create resource="images">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="url" label="Image URL" />
    </SimpleForm>
  </Create>
);

export const ImageEdit = () => (
  <Edit resource="images">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="url" label="Image URL" />
    </SimpleForm>
  </Edit>
);
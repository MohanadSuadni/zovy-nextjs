import { List, Datagrid, TextField, ImageField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ImageList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ImageField source="url" />
    </Datagrid>
  </List>
);

export const ImageCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);

export const ImageEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="url" />
    </SimpleForm>
  </Edit>
);

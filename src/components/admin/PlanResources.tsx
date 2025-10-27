import { Create, SimpleForm, TextInput } from 'react-admin';

export const PlanCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="heading" label="Naslov paketa" />
      <TextInput source="price.yearly" label="Cena godišnje" />
      <TextInput source="price.monthly" label="Cena mesečno" />
    </SimpleForm>
  </Create>
);

import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MENTEE_TITLE_FIELD } from "../mentee/MenteeTitle";
import { MENTOR_TITLE_FIELD } from "../mentor/MentorTitle";

export const PairingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Mentee" source="mentee.id" reference="Mentee">
          <TextField source={MENTEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Mentor" source="mentor.id" reference="Mentor">
          <TextField source={MENTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="pairedAt" source="pairedAt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

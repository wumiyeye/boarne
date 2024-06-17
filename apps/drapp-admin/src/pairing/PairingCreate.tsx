import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MenteeTitle } from "../mentee/MenteeTitle";
import { MentorTitle } from "../mentor/MentorTitle";

export const PairingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="mentee.id" reference="Mentee" label="Mentee">
          <SelectInput optionText={MenteeTitle} />
        </ReferenceInput>
        <ReferenceInput source="mentor.id" reference="Mentor" label="Mentor">
          <SelectInput optionText={MentorTitle} />
        </ReferenceInput>
        <DateTimeInput label="pairedAt" source="pairedAt" />
      </SimpleForm>
    </Create>
  );
};

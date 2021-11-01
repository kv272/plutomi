// Types for the actual items that go into Dynamo DB
// Makes it easier to reference all variables in the front end

interface DynamoUser {
  created_at?: string;
  entity_type?: string;
  user_email?: string;
  org_id?: string;
  full_name?: string;
  GSI1SK?: string;
  GSI2SK?: string;
  GSI2PK?: string;
  GSI1PK?: string;
  user_id?: string;
  last_name?: string;
  org_join_date?: string;
  first_name?: string;
  SK?: string;
  total_invites;
  PK?: string;
}

interface DynamoOpening {
  PK: string;
  SK: "OPENING";
  entity_type: "OPENING";
  created_at: string;
  opening_id: string;
  GSI1PK: string;
  GSI1SK: string;
  total_applicants: number;
  is_public: boolean;
  stage_order: string[];
  total_stages: 0;
  total_openings: 0;
  total_applicants: 0;
}

interface DynamoStage {
  PK: string;
  SK: `STAGE`;
  entity_type: "STAGE";
  created_at: string;
  stage_id: string;
  total_applicants: number;
  question_order: string[];
  opening_id: string;
  GSI1PK: string;
  GSI1SK: string;
}

interface DynamoOrgInvite {
  PK: string;
  SK: string;
  org_id: string;
  created_by: DynamoUser;
  entity_type: "ORG_INVITE";
  created_at: string;
  expires_at: string;
  invite_id: string;
  GSI1PK: string;
  GSI1SK: string;
}

interface DynamoStageQuestion {
  PK: string;
  SK: string;
  question_description: string;
  question_id: string;
  entity_type: string;
  created_at: string;
  GSI1PK: string;
  GSI1SK: string;
}

interface DynamoOrg {
  PK: string;
  SK: `ORG`;
  org_id: string;
  entity_type: "ORG";
  created_at: string;
  GSI1PK: `ORG`;
  GSI1SK: string;
  total_users: number;
  total_openings: number;
  total_stages: number;
  total_applicants: number;
}

interface DynamoApplicant {
  PK: string;
  SK: `APPLICANT`;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  email_verified: boolean;
  applicant_id: string;
  org_id: string;
  entity_type: "APPLICANT";
  created_at: CustomDateFormat;
  current_opening_id: string;
  current_stage_id: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string;
  GSI2SK: string;
  APPLICANT_RESPONSE?: DynamoApplicantResponse[];
  responses?: DynamoApplicantResponse[]; // Now is returned when getting applicant by ID
}

interface DynamoApplicantResponse {
  PK: string;
  SK: `APPLICANT_RESPONSE`;
  org_id: string;
  applicant_id: string;
  entity_type: "APPLICANT_RESPONSE";
  question_title: string;
  question_description: string;
  question_response: any;
  created_at: string;
  response_id: string;
  GSI1PK: string;
  GSI1SK: APPLICANT_RESPONSE;
}

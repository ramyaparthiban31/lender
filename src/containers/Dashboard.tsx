import React, { FC } from "react";
// import { useAuthentication } from "./Authentication";
import { Card } from "react-bootstrap";
import "./Dashboard.css";
import CredentialTable from './CredentialTable';
import RequestCredential from "./RequestCredential";
const Dashboard: FC = () => {
  // const { sdk } = useAuthentication();
  // const did = sdk!.did;
  return (
    <div className="Home">
      <Card>
        <Card.Header as="h5">
          Request Credential
        </Card.Header>
        <Card.Body children={<RequestCredential />} />
      </Card>
      <Card>
        <Card.Header as="h5">
          Applicants' Credentials Table
        </Card.Header>
        <Card.Body children={<CredentialTable />} />
      </Card>
    </div>
  );
};
export default Dashboard;
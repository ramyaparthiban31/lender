import React, { FC, useState } from "react";
import { useAuthentication } from "./Authentication";
import { Button, Form, FormControl } from "react-bootstrap";
import config from '../config';

const Login: FC = () => {
  const { loading, login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shareCredRequestToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNyZWRlbnRpYWxSZXF1aXJlbWVudHMiOlt7InR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJJRERvY3VtZW50Q3JlZGVudGlhbFBlcnNvblYxIl0sImNvbnN0cmFpbnRzIjpbXX1dLCJjYWxsYmFja1VSTCI6IiJ9LCJleHAiOjE2MTkwNzk2OTY2ODAsInR5cCI6ImNyZWRlbnRpYWxSZXF1ZXN0IiwianRpIjoiYjgwM2NjMDFkN2FiNDVlMiIsImlzcyI6ImRpZDplbGVtOkVpRDJrdFNNb29fcmhLTTRYT1NDYWtERnQzMGZJa1NubHZoajFpRGYwXzl6cnc7ZWxlbTppbml0aWFsLXN0YXRlPWV5SndjbTkwWldOMFpXUWlPaUpsZVVwMlkwZFdlVmxZVW5CaU1qUnBUMmxLYW1OdFZtaGtSMVZwVEVOS2NtRlhVV2xQYVVscVkwaEtjR0pYUm5sbFUwbHpTVzFHYzFwNVNUWkphMVpVVFdwVk1sTjVTamtpTENKd1lYbHNiMkZrSWpvaVpYbEtRVmt5T1hWa1IxWTBaRU5KTmtsdGFEQmtTRUo2VDJrNGRtUjZUbkJhUXpWMlkyMWpkbU15Vm1wa1dFcHdaRWhyZG1ScVNXbE1RMHAzWkZkS2MyRlhUa3hhV0d0cFQyeDBOMGx0Ykd0SmFtOXBTVE5DZVdGWE1XaGpibXRwVEVOS01XTXlSbTVhVTBrMlNXNU9jRm95TlhCaWJXTnBURU5LTUdWWVFteEphbTlwVlRKV2FtTkVTVEZPYlhONFZtMVdlV0ZYV25CWk1rWXdZVmM1ZFZNeVZqVk5ha0Y0VDBOSmMwbHVRakZaYlhod1dUQjBiR1ZWYUd4bFEwazJTV3BCZWsxWFRtaE5SMVpvV1hwUk5FNXFXVFZPUkVGNFRVUldhVTE2VFhwTlIxcHRUMVJKTUUxcVZYbGFSR3Q2V2tkR2JGbHFVVEpaVjAweVRtcFdhRTVxV1RWWmJWSnBUbnBuZDA1WFNURk9SR015VDFkUmQwMXBTamxNU0hOcFlWZFJhVTlwU1dwamJWWnFZak5hYkdOdWEybE1RMG94WXpKR2JscFRTVFpKYmtwc1dUSTVNbHBZU2pWSmFYZHBaRWhzZDFwVFNUWkpiRTVzV1ROQmVVNVVXbkpOVmxwc1kyMXNiV0ZYVG1oa1IyeDJZbXQwYkdWVVNYZE5WR2RwVEVOS2QyUlhTbk5oVjA1TVdsaHNTVnBZWjJsUGFVbDNUVEpXYWsxcVkzbFpWRlYzVG0xV2FWcHRWVFJOVkdzeVRqSkdhazU2V21wTmVrNXBUbnBOZDA5RVZUVk9WRVV4VFcxWk0wMVhSbXhOVjBWNVdsUlZNVTlYVVhoWmJVMHdUVVJOTVZsVVVYcGFSRlY2V1ZkSmFXWldNSE5KYlVZeFpFZG9iR0p1VW5CWk1rWXdZVmM1ZFVscWNHSkphVTUzWTIxc2RGbFlTalZKYkRCelNXMUdlbU15Vm5sa1IyeDJZbXN4YkdSSGFIWmFRMGsyVjNsSmFtTklTbkJpVjBaNVpWTktaR1pSSWl3aWMybG5ibUYwZFhKbElqb2lkekl4TVVkWFJGY3RkbGt3VkdKWWQyNXFjMHg0UkUxTlltdHRjVWQwUVRWamNreGhVVXB2VUUwd01WbEplbGgwYTFOellsaFpUWFppV214UGNGTkRPWGxaVTFjNVFtYzBYMll3TVZoR1RHdHNTV3hpZVVFaWZRI3ByaW1hcnkifQ.8f0548f28f88f184b4fb72a5b6d2a9148706b00a40947855f9238676ea58f812417440e4e522ebd076fdfc0379f81729b77f1aa5277c6959dff71adbd9478276');

  async function onLogin() {
    try {
      await login.fromLoginAndPassword(username, password);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className='Login'>
      <div className='Form'>
        <h1 className='Title'>Verifier Login</h1>
        <p className='Info'>
          Login in order to continue
        </p>

        <Form style={{ width: 280 }}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button block disabled={loading} onClick={onLogin}>
            Login
          </Button>

         {/* <p> Looking to rent for a vehicle for your trip? Share your driving license credentials <a href={config.wallet_url + '/share-credentials?token=' + shareCredRequestToken} target='_blank' rel="noopener noreferrer">here!</a></p> */}
        </Form>
      </div>
    </div>
    
  );
};

export default Login;

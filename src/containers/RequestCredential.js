import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import { useAuthentication } from './Authentication';


const url = "http://lcoalhost:3000/accept-credentials?token="

const RequestCredential = () => {
    const { sdk, message } = useAuthentication();

    const [email, setemail] = useState('')
    const [DID, setDID] = useState('')
    const [token, settoken] = useState('')


    const sendEmailTo = async () => {
        // sendEmail()

        const res = await window.sdk.generateCredentialShareRequestToken([
            {
                "type": [
                    "VerifiableCredential",
                    "IDDocumentCredentialPersonV1"
                ]
            }
        ])
        settoken(res)
        if (DID) {
            await message.send(DID, { token: res });
        }
        console.log('res: ', res);
    }


    return (
        <div style={{width:'70%', margin: '50px auto'}}>
        <FormGroup controlId='email'>
            <FormControl placeholder='Email ID' name='email' type='text' value={email} onChange={e => setemail(e.target.value)}/>
        </FormGroup>
        <FormGroup controlId='peerDID'>
            <FormControl placeholder='DID' name='DID' type='text' value={DID} onChange={e => setDID(e.target.value)}/>
        </FormGroup>
        <Button onClick={() => sendEmailTo()}>Request Credential</Button>
        </div>
    )
}

export default RequestCredential

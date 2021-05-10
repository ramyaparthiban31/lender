import axios from 'axios';
import config from "../config";

const { apiKeyHash, env } = config
const baseURL = `https://cloud-wallet-api.${env}.affinity-project.org/api/v1`

const cloudWalletApi = axios.create({
	baseURL,
	headers: {
		'Api-Key': apiKeyHash,
		'Content-Type': 'application/json',
	},
});

export const signup = async (
    username: string,
    password: string
  ) => {
    const signUpParams = { username, password }
    const { data: token } =  await cloudWalletApi.post('/users/signup', signUpParams)

    return token
}

export default cloudWalletApi

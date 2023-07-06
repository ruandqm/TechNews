import axios from 'axios'

type SignInRequestData = {
    email: string,
    password: string
}

export async function signInRequest({ email, password }: SignInRequestData) {
    const response = await axios.get(`https://retoolapi.dev/Zr0u6z/tech-news?email=${email}`)

    if (response.data[0].password === password) {
        const userData = response.data[0]
        return {
            name: userData.name,
            email: userData.email,
            favorites: userData?.favorites
        }
    } else {
        throw 'Invalid Credentials'
    }

}
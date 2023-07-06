export interface iUser {
    name: string,
    email: string,
}

export interface iSignInData {
    email: string,
    password: string
}

export interface iAuthContextType {
    isAuthenticated: boolean,
    validating: boolean,
    user: iUser,
    signIn: (data: iSignInData) => Promise<void>,
    logout: () => void
}
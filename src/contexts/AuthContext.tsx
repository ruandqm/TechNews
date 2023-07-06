'use client'

// React and Hooks
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'

// Functions
import { signInRequest } from '../services/auth'
import { toast } from 'react-toastify'

// Interfaces
import { iAuthContextType, iSignInData, iUser } from '@/interfaces/auth'


// Context
export const AuthContext = createContext({} as iAuthContextType)

// Context Provider
export function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const [user, setUser] = useState({} as iUser)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [validating, setValidating] = useState(false) // true while auth process is running


    useEffect(() => { // Recover user token
        const { 'nextauth.token': token } = parseCookies()

        if (token) {
            const userToken = JSON.parse(token)
            setUser(userToken)
            setIsAuthenticated(true)
            toast.success(`Welcome back ${userToken.name}!`, { theme: 'colored' })
        }
    }, [])


    async function signIn({ email, password }: iSignInData) {
        setValidating(true)
        try {
            const userResponse = await signInRequest({
                email,
                password,
            })
            setCookie(undefined, 'nextauth.token', JSON.stringify(userResponse), {
                maxAge: 60 * 60 * 1, // 1 hour
            })
            setUser(userResponse)
            setIsAuthenticated(true)
            setValidating(false)

            router.push('/')
            toast.success(`Welcome ${userResponse.name}!`, { theme: 'colored' })
        } catch (error) {
            toast.error('Invalid Credentials!', { theme: 'colored' })
            setValidating(false)
        }

    }

    function logout() {
        destroyCookie(undefined, 'nextauth.token')
        setUser({} as iUser)
        setIsAuthenticated(false)
        router.push('/')
        toast.success('You successfully exited!', { theme: 'colored' })
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout, validating }}>
            {children}
        </AuthContext.Provider>
    )
}
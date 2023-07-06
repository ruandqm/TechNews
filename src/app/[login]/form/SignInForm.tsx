//React and Hooks
import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'

// Components
import { Field } from '@/components/Field'
import { MdAlternateEmail, MdVisibility, MdVisibilityOff, MdLock } from 'react-icons/md'
import SubmitButton from './SubmitButton'

// Context
import { AuthContext } from '@/contexts/AuthContext'


export default function SignInForm() {

    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const { signIn } = useContext(AuthContext)

    const changePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            signIn(values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Field.Root>
                <Field.Label text='Seu E-mail' />
                <Field.Input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                >
                    <Field.Icon icon={<MdAlternateEmail />} position='left-0' />
                </Field.Input>
            </Field.Root>

            <Field.Root>
                <Field.Label text='Sua senha' />
                <Field.Input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder='Senha'
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                >
                    <Field.Icon icon={<MdLock />} position='left-0' />
                    <Field.Icon
                        icon={passwordVisibility ? <MdVisibilityOff /> : <MdVisibility />}
                        position='right-0' action={changePasswordVisibility}
                        custom='cursor-pointer' />
                </Field.Input>
            </Field.Root>

            <SubmitButton text='Sign In' />
        </form>
    )
}
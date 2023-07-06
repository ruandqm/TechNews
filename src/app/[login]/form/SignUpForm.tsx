// React and Hooks
import React, { useState } from 'react'
import { useFormik } from 'formik'

// Components
import { Field } from '@/components/Field' // This component follows composition pattern
import { MdAlternateEmail, MdBadge, MdVisibility, MdVisibilityOff, MdLock } from 'react-icons/md'
import SubmitButton from './SubmitButton'

// Functions
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'


export default function Form() {
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const router = useRouter()

    const changePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            passConfirm: '',
        },
        validateOnChange: false,
        validateOnBlur: false,
        validate: (values) => {
            const errors: { passConfirm?: string } = {}

            if (values.password !== values.passConfirm) {
                errors.passConfirm = 'Passwords must be the same'
                toast.error('Passwords must be the same!', { theme: 'colored' })
            }
            return errors
        },
        onSubmit: (values) => {
            const userData = { name: values.name, email: values.email, password: values.password }

            axios.post('https://retoolapi.dev/Zr0u6z/tech-news', userData)

            router.push('/signin')
            toast.success('Successfully registered user!', { theme: 'colored' })
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            <Field.Root>
                <Field.Label text='Your Name' />
                <Field.Input
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                >
                    <Field.Icon icon={<MdBadge />} position='left-0' />
                </Field.Input>
            </Field.Root>

            <Field.Root>
                <Field.Label text='Your E-mail' />
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
                <Field.Label text='Create a Password' />
                <Field.Input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder='Password'
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

            <Field.Root>
                <Field.Label text='Confirm Password' />
                <Field.Input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder='Password'
                    name='passConfirm'
                    onChange={formik.handleChange}
                    value={formik.values.passConfirm}
                >
                    <Field.Icon icon={<MdLock />} position='left-0' />
                    <Field.Icon
                        icon={passwordVisibility ? <MdVisibilityOff /> : <MdVisibility />}
                        position='right-0' action={changePasswordVisibility}
                        custom='cursor-pointer' />
                </Field.Input>
            </Field.Root>

            <SubmitButton text='Sign Up' />

        </form>
    )
}
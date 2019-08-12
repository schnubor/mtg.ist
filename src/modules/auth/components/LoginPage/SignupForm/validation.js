export const validate = (values) => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    if (!values.password_again) {
        errors.password_again = 'Required'
    }

    if( values.password !== values.password_again ) {
        errors.password_again = 'Passwords must match'
    }

    return errors
}

export default validate

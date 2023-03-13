import React from "react";
import {useFormik} from 'formik';

const ContactForm = () => {
    const {errors, values, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: ""        
        },

        validate: (values) => {
            const errors = {}
            const REGEX = {
                email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                phone: /^[0-9+]+$/
            }

            if(!values.name) {
                errors.name = "Name không được để trống"
            }

            if(!values.email) {
                errors.email = "Email không được để trống"
            } else if(!REGEX.email.test(values.email)) {
                errors.email = "Cần nhập đúng định dạng của email"
            }

            if(!values.phone) {
                errors.phone = "Phone không được để trống"
            } else if(!REGEX.phone.test(values.phone)) {
                errors.phone = "Bạn cần nhập định dạng số"
            }

            if(!values.message) {
                errors.message = "Bạn cần nhập nội dung để gửi"
            } else if(values.message.length <= 6) {
                errors.message = "Nhập tối thiểu 6 ký tự"
            }

            return errors;

        },

        onSubmit: (values) => {
            console.log(values);
        }

    })

    return (
        <>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name (*)</label>
                    <input type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && <span style={{color: "red"}}> {errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email (*)</label>
                    <input type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && <span style={{color: "red"}}> {errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Phone (*)</label>
                    <input type="text" id="phone" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                    {errors.phone && <span style={{color: "red"}}> {errors.phone}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message (*)</label>
                    <textarea type="text" id="message" name="message" value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
                    {errors.message && <span style={{color: "red"}}> {errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ContactForm;
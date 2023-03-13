import React from "react";
import { useFormik } from "formik";

const MailForm = () => {

    const {errors, values, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            toEmail: "",
            title: "",
            message: "",
        },

        validate: (values) => {
            const errors = {}
            const REGEX = {
                email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            }

            if(!values.toEmail) {
                errors.toEmail = "Bạn cần nhập địa chỉ email"
            } else if(!REGEX.email.test(values.toEmail)) {
                errors.toEmail = "Cần nhập đúng định dạng của email"
            }

            if(!values.title) {
                errors.title = "Bạn cần nhập tiêu đề cho email"
            }

            if(!values.message) {
                errors.message = "Bạn cần nhập nội dung cho email"
            }

            return errors;
        },

        onSubmit: (values) => {
            // console.log(values)
            alert(`Sent successfully!, email của bạn sẽ được gửi tới ${values.toEmail}`)
        } 
    
    })

    const [email, setEmail] = React.useState({
        image: null
    })

    const handleFileUpload = (e) => {
        // console.log(e.target.files[0])
        setEmail({
            ...email,
            image: e.target.files[0]
        })
        
    }
    
    return (
        <>
            <h1>Mail Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="toEmail">To (*)</label>
                    <input type="email" name="toEmail" id="toEmail" value={values.toEmail} onChange={handleChange} />
                    {errors.toEmail && <span style={{color: "red"}}> {errors.toEmail}</span>}
                </div>
                <div>
                    <label htmlFor="title">Title (*)</label>
                    <input type="text" name="title" id="title" value={values.title} onChange={handleChange} onBlur={handleBlur} />
                    {errors.title && <span style={{color: "red"}}> {errors.title}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message (*)</label>
                    <textarea type="text" name="message" id="message" value={values.message} onChange={handleChange} ></textarea>
                    {errors.message && <span style={{color: "red"}}> {errors.message}</span>}
                </div>
                <div>
                    <input type="file" name="image" id="image" onChange={(e) => handleFileUpload(e)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default MailForm;
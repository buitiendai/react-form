import React from "react";
import { useFormik } from "formik";

const Library = () => {
    const [books, setBooks] = React.useState({
        books: []
    });
    const [form, setForm] = React.useState({
        form: {}
    })
    const [indexSelected, setIndexSelected] = React.useState({
        indexSelected: -1
    })

    const {errors, values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            title: "",
            quantity: ""
        },

        validate: (values) => {
            const errs = {}
            const REGEX = {
                number: /^[0-9+]+$/
            }
            if(!values.title) {
                errs.title = "Tiêu đề không được để trống"
            }

            if(!values.quantity) {
                errs.quantity = "Số lượng không được để trống"
            } else if(!REGEX.number.test(values.quantity)) {
                errs.quantity = "Bạn cần nhập giá trị là số"
            }

            return errs;
        },

        onSubmit: (values) => {
            console.log(values);
            setIndexSelected({
                ...indexSelected,
                newIndexSelected: indexSelected + 1
            });

            setBooks({
                ...books,
                newTitle: books.title,
                newQuantity: books.quantity
            })
        }

    })

    return (
        <>
            <h1>Library</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Tiêu đề</label>
                    <input type="text" name="title" value={values.title} onChange={handleChange}/>
                    {errors.title && <span> {errors.title}</span>}
                </div>
                <div>
                    <label htmlFor="">Số lượng</label>
                    <input type="text" name="quantity" value={values.quantity} onChange={handleChange} />
                    {errors.quantity && <span> {errors.quantity}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Library;
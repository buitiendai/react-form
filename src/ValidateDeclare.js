import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: "Trường này không được để trống"
    }
})

const ValidateDeclare = Yup.object().shape({
    name: Yup.string().required(),
    passport: Yup.string().required(),
    birthday: Yup.string().required("Trường này không được để trống và Năm sinh phải lớn hơn 1900"),
    gender: Yup.string().required(),
    nationality: Yup.string().required(),
    province: Yup.string().required(),
    district: Yup.string().required(),
    ward: Yup.string().required(),
    address: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().required().email("Chưa đúng định dạng email")

})

export default ValidateDeclare;
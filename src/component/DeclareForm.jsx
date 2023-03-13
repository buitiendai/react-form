import React from "react";
import { useFormik } from "formik";
import ValidateDeclare from "../ValidateDeclare";

const DeclareForm = () => {
    const {errors, values, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            name: "",
            passport: "",
            birthday: "",
            gender: "",
            nationality: "",
            company: "",
            department: "",
            isInsurance: "",
            province: "",
            district: "",
            ward: "",
            address: "",
            phone: "",
            email: "",
            move: "",
            status: "",
            touch: ""
        },

        validationSchema: ValidateDeclare,

        onSubmit: (values) => {
            console.log(values);
            alert(`Thank you ${values.name} for declaring`);
        }
    })


    return (
        <>
            <h1>Tờ khai y tế</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Họ tên</label>
                    <input type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.name && <span style={{color: "red"}}> {errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="passport">Số hộ chiếu/CCCD</label>
                    <input type="text" name="passport" id="passport" value={values.passport} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.passport && <span style={{color: "red"}}> {errors.passport}</span>}
                </div>
                <div>
                    <label htmlFor="birthday">Năm sinh</label>
                    <input type="text" name="birthday" id="birthday" value={values.birthday} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.birthday && <span style={{color: "red"}}> {errors.birthday}</span>}
                </div>
                <div>
                    <span htmlFor="gender">Giới tính</span>
                    <input type="radio" name="gender" value="male" onChange={handleChange} />Nam 
                    <input type="radio" name="gender" value="female" onChange={handleChange} />Nữ 
                </div>
                <div>
                    <label htmlFor="nationality">Quốc tịch</label>
                    <input type="text" name="nationality" id="nationality" value={values.nationality} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.nationality && <span style={{color: "red"}}> {errors.nationality}</span>}
                </div>
                <div>
                    <label htmlFor="company">Công ty làm việc</label>
                    <input type="text" name="company" id="company" value={values.company} onChange={handleChange} onBlur={handleBlur}/>
                    
                </div>
                <div>
                    <label htmlFor="department">Bộ phận làm việc</label>
                    <input type="text" name="department" id="department" value={values.department} onChange={handleChange} onBlur={handleBlur}/>
                    
                </div>
                <div>
                    <span htmlFor="isInsurance">Có thẻ bảo hiểm y tế</span>
                    <input type="checkbox" name="isInsurance" id="isInsurance" value={values.isInsurance} onChange={handleChange} />
                </div>
                <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                <div>
                    <label htmlFor="province">Tỉnh thành</label>
                    <input type="text" name="province" id="province" value={values.province} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.province && <span style={{color: "red"}}> {errors.province}</span>}
                </div>
                <div>
                    <label htmlFor="district">Quận/huyện</label>
                    <input type="text" name="district" id="district" value={values.district} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.district && <span style={{color: "red"}}> {errors.district}</span>}
                </div>
                <div>
                    <label htmlFor="ward">Phường/xã</label>
                    <input type="text" name="ward" id="ward" value={values.ward} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.ward && <span style={{color: "red"}}> {errors.ward}</span>}
                </div>
                <div>
                    <label htmlFor="address">Số nhà/tổ dân phố/thôn</label>
                    <input type="text" name="address" id="address" value={values.address} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.address && <span style={{color: "red"}}> {errors.address}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Điện thoại</label>
                    <input type="text" name="phone" id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.phone && <span style={{color: "red"}}> {errors.phone}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.email && <span style={{color: "red"}}> {errors.email}</span>}
                </div>
                <div>
                    <h4>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào (có thể đi qua nhiều quốc gia)</h4>
                    <textarea type="text" name="move" value={values.move} onChange={handleChange}></textarea>
                </div>
                <div>
                    <h4>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h4>
                    <input type="checkbox" name="status" value="sot" onChange={handleChange} />Sốt <br />
                    <input type="checkbox" name="status" value="ho" onChange={handleChange} />Ho <br />
                    <input type="checkbox" name="status" value="khotho" onChange={handleChange} />Khó thở <br />
                    <input type="checkbox" name="status" value="viemphoi" onChange={handleChange} />Viêm phổi <br />
                    <input type="checkbox" name="status" value="dauhong" onChange={handleChange} />Đau họng <br />
                    <input type="checkbox" name="status" value="metmoi" onChange={handleChange} />Mệt mỏi
                </div>
                <div>
                    <h4>Trong vòng 14 ngày qua, Anh/Chị có tiếp súc với?</h4>
                    <input type="checkbox" name="touch" value="nghingo" onChange={handleChange} />Người bệnh hoặc nghi ngờ, mắc bệnh Covid-19 <br />
                    <input type="checkbox" name="touch" value="cobenh" onChange={handleChange} />Người từ nước có bệnh Covid-19 <br />
                    <input type="checkbox" name="touch" value="bieuhien" onChange={handleChange} />Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default DeclareForm;
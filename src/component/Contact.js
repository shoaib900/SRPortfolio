import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from "yup";
import { useFormik } from 'formik';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1c7au0q', 'template_s39zp7k', form.current, 'fEMko0EatVnRj65o_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("required"),
            email: Yup.string().email().required("email required"),
            message: Yup.string().required("message required")
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='container' id='contact'>
            <div className='contact'>
                <h1> <span className='span'>Contact</span> </h1>
            </div>

            <div className='formBox'>
                <form ref={form} onSubmit={sendEmail} >
                    <div class="input-group flex-nowrap">
                        <input type="text" name="name" class="form-control" placeholder="Enter username"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.name && formik.errors.name ? <div style={{ color: "red", textAlign: "center" }}>{formik.errors.name}</div> : null}
                    <div class="input-group flex-nowrap">
                        <input type="email" class="form-control" placeholder="Enter email" id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? <div style={{ color: "red", textAlign: "center" }}>{formik.errors.email}</div> : null}
                    <div class="input-group flex-nowrap">
                        <textarea type="text" name="message" id="message" class="form-control" placeholder="Enter message" rows={7}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.message && formik.errors.message ? <div style={{ color: "red", textAlign: "center" }}>{formik.errors.message}</div> : null}

                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit" >Send Message</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Contact

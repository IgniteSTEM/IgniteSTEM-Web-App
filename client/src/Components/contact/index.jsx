import React from 'react';

import './../../Styles/contact.scss'; // Import styling

import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {withFormik, Form, Field } from 'formik';
import Yup from 'yup';

	const contactPage = ({
		values,
		errors,
		touched,
		isSubmitting
	}) => (
		<Form>
			<div id = "name1"> First Name&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Last Name </div>
			<br />
			<div>
			{ touched.firstname && errors.firstname && <p>{errors.firstname}</p> }
			<Field type="text" name="firstname" placeholder="First Name" style = {{width: 170, height:30}}/> 
			&emsp;&emsp;
			{ touched.lastname && errors.lastname && <p>{errors.lastname}</p> }
			<Field type="text" name="lastname" placeholder="Last Name" style = {{width: 170, height:30}}/>

			</div>
			<br />
			<br />
			<div> Email </div>
			<br />
			<div>
				{ touched.email && errors.email && <p>{errors.email}</p> }
	    		<Field type="email" name="email" placeholder="Email" style = {{width: 170, height:30}} />
	    	</div>
	    	<br />

	    	<div> Message </div>
			<br />

	    	<div>
	    		{ touched.textarea && errors.textarea && <p> {errors.textarea}</p>}
	    		<Field type="textarea" name="textarea" placeholder="Message" rows="10" cols="10" style = {{width:300, height:100, rows:5}}/>
	    	</div>
	    	<br />
	    	<button disabled={isSubmitting}>Submit</button>
	    </Form>
	)

	const FormikApp = withFormik({
		mapPropsToValues({firstname, lastname, email, textarea }) {
			return{
				firstname: firstname || "",
				lastname: lastname || "",
				email: email || "",
				textarea: textarea || ""
			}
		},
		validationSchema: Yup.object().shape({
			firstname: Yup.string().required("Firstname Required"),
			lastname: Yup.string().required("Lastname Required"),
			email: Yup.string().email().required("Email Required"),
			textarea: Yup.string().required("Message Required")
		}),
		handleSubmit(values, {resetForm, setSubmitting}) {
			console.log(values)
			resetForm()
			setSubmitting(false)
		}
	})(contactPage)

	//render(<FormikApp />, document.getElementById('root'));

export default FormikApp;

/*

import React from 'react';

import './../../Styles/contact.scss'; // Import styling

import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {withFormik, Form, Field } from 'formik';
import Yup from 'yup';


const contactPage = () => {
    // Avi this is you
    return (
        <div className="contact">
            Contact page
        </div>
    );
};

export default contactPage;
*/
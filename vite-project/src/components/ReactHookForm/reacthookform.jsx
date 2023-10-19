import { useForm } from "react-hook-form";
import "./reacthookform.css";
import Checkbox from "../../components/Checkbox/checkbox"; // Import the Checkbox component

function EmployeeRegistrationForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  
    const onSubmit = (data) => {
        alert(`First Name: ${data.firstName}\nLast Name: ${data.lastName}\nEmail ID: ${data.email}\nMobile Number: ${data.mobile}\nQualifications: ${data.qualifications}`);
        reset();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="hook">

 {/* first name input box */}

        <label className="hook__text">First Name</label>
        <input
          type="firstName"
          name="firstName"
          className="hook__input"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <p className="hook__error">First Name is required</p>
        )}

{/* last name input box */}
        <label className="hook__text">Last Name</label>
        <input
          type="lastName"
          name="lastName"
          className="hook__input"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <p className="hook__error">Last Name is required</p>
        )}

{/* email input box */}
        <label className="hook__text">Email ID</label>
        <input
        type="email"
        name="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
        {errors.email && (
        <p className="hook__error">Email is required and must be valid</p>
        )}

{/* mobile number input box */}
        <label className="hook__text">Mobile Number</label>
        <input
        type="mobile"
        name="mobile"
        className="hook__input"
        {...register("mobile", { required: true })}
      />
        {errors.mobile && (
        <p className="hook__error">Mobile Number is required</p>
        )}

{/* qualification check box */}
        <label className="hook__text">Qualifications</label>
        <Checkbox options={['High School (10th)', 'High School (12th)', 'Graduation (Bachelors)', 'Post Graduation (Masters)', 'Other']} register={register}/>

{/* submit & reset buttons */}
        <div id="button_container">
        <button className="hook__button" type="submit">
          Submit
        </button>
        <button className="hook__button" type="reset">
          Reset
        </button>
        </div>
      </form>
    );
  }
  
  export default EmployeeRegistrationForm;
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  let {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }} = useForm();
  async function onSubmit(data) {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name", {
            required: "name is required",
            minLength: { value: 5, message: "minmun length is atleast 5" },
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}{" "}
        <br />
        <label htmlFor="class">Class</label>
        <input
          type="text"
          {...register("class", { required: "class is required" })}
        />
        {errors.class && <p style={{ color: "red" }}>{errors.class.message}</p>}
        <br />
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "submit"}
        />
      </form>
    </>
  );
};

export default Form;

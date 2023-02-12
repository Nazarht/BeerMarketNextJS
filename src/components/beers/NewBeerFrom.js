import useForm from "@/hooks/useForm";
import { useRouter } from "next/router";
import classes from "./NewBeerForm.module.css";

function NewBeerForm() {
    const router = useRouter();

  const {
    value: nameValue,
    isValid: nameIsValid,
    valueFormError: nameValueFormError,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useForm((value) => {
    return value.trim() !== "";
  });

  const {
    value: priceValue,
    isValid: priceIsValid,
    valueFormError: priceValueFormError,
    hasError: priceHasError,
    changeHandler: priceChangeHandler,
    blurHandler: priceBlurHandler,
    reset: priceReset,
  } = useForm((value) => {
    return value.trim() !== "";
  });

  const {
    value: pictureValue,
    isValid: pictureIsValid,
    valueFormError: pictureValueFormError,
    hasError: pictureHasError,
    changeHandler: pictureChangeHandler,
    blurHandler: pictureBlurHandler,
    reset: pictureReset,
  } = useForm((value) => {
    return value.trim() !== "";
  });

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    valueFormError: descriptionValueFormError,
    hasError: descriptionHasError,
    changeHandler: descriptionChangeHandler,
    blurHandler: descriptionBlurHandler,
    reset: descriptionReset,
  } = useForm((value) => {
    return value.trim() !== "";
  });

  const formIsValid =
    nameIsValid && priceIsValid && descriptionIsValid && pictureIsValid;

  const submitHandler = async (e) => {
    e.preventDefault();
    const beerData = {
      name: nameValue,
      description: descriptionValue,
      image: pictureValue,
      price: priceValue,
    };

    console.log(beerData)

    const response = await fetch("/api/send-beer", {
      method: "POST",
      body: JSON.stringify(beerData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await response.json();

    console.log(result);

    router.push('/')
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={classes.holder}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <p className={`${classes.error} ${nameHasError ? classes.active : ""}`}>
          Please enter some name
        </p>
      </div>
      <div className={classes.control}>
        <div className={classes.holder}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={priceValue}
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
          />
        </div>
        <p
          className={`${classes.error} ${priceHasError ? classes.active : ""}`}
        >
          Please enter some price
        </p>
      </div>
      <div className={classes.control}>
        <div className={classes.holder}>
          <label htmlFor="picture">Picture</label>
          <input
            type="url"
            id="picture"
            value={pictureValue}
            onChange={pictureChangeHandler}
            onBlur={pictureBlurHandler}
          />
        </div>
        <p
          className={`${classes.error} ${
            pictureHasError ? classes.active : ""
          }`}
        >
          Please enter some valid url
        </p>
      </div>
      <div className={classes.control}>
        <div className={classes.holder}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="desription"
            value={descriptionValue}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
            rows="5"
          />
        </div>
        <p
          className={`${classes.error} ${
            descriptionHasError ? classes.active : ""
          }`}
        >
          Please enter some valid description
        </p>
      </div>
      <button type="submit" disabled={!formIsValid}>
        Apply
      </button>
    </form>
  );
}

export default NewBeerForm;

import { PartnerData } from "../../../types/guest-types";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { addPartner } from "../../../store/single-guest-slice";
import { closeNewPartnerModal } from "../../../store/ui-slice";
import Card from "../../UI/Card";
import FormInput from "../FormInput";
import FormCheckbox from "../FormCheckbox";

const NewPartner = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");
  const [foodGlutenFreeInput, setFoodGlutenFreeInput] = useState(false);
  const [foodLactoseFreeInput, setFoodLactoseFreeInput] = useState(false);
  const [foodDiabeticInput, setFoodDiabeticInput] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const newPartnerData: PartnerData = {
      firstName: firstNameInput.trim(),
      lastName: lastNameInput.trim(),
      nickName: nickNameInput.trim(),
      foodGlutenFree: foodGlutenFreeInput,
      foodLactoseFree: foodLactoseFreeInput,
      foodDiabetic: foodDiabeticInput,
    };

    dispatch(addPartner(newPartnerData));

    setFirstNameInput("");
    setLastNameInput("");
    setNickNameInput("");
    setFoodGlutenFreeInput(false);
    setFoodLactoseFreeInput(false);
    setFoodDiabeticInput(false);

    dispatch(closeNewPartnerModal());
  };

  const closeHandler = () => {
    dispatch(closeNewPartnerModal());
  };

  const firstNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNameInput(event.target.value);
  };

  const lastNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(event.target.value);
  };

  const foodGlutenFreeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFoodGlutenFreeInput(event.target.checked);
  };

  const foodLactoseFreeInputHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setFoodLactoseFreeInput(event.target.checked);
  };

  const foodDiabeticInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFoodDiabeticInput(event.target.checked);
  };

  return (
    <Card title="??j k??s??r??" asOverlay onClose={closeHandler}>
      <form action="submit" onSubmit={submitHandler}>
        <FormInput
          id="lname"
          label="vezet??kn??v"
          type="text"
          changeHandler={lastNameInputHandler}
          value={lastNameInput}
        />
        <FormInput
          id="fname"
          label="keresztn??v"
          type="text"
          changeHandler={firstNameInputHandler}
          value={firstNameInput}
        />
        <fieldset className="form__fieldset u-mt-3">
          <legend className="form__legend">speci??lis ??tkez??si ig??ny</legend>
          <div className="u-mt-1">
            <FormCheckbox
              id="glutenfree"
              label="glut??nmentes"
              checked={foodGlutenFreeInput}
              changeHandler={foodGlutenFreeInputHandler}
            />
            <FormCheckbox
              id="lactosefree"
              label="lakt??zmentes"
              checked={foodLactoseFreeInput}
              changeHandler={foodLactoseFreeInputHandler}
            />
            <FormCheckbox
              id="diabetic"
              label="diabetikus"
              checked={foodDiabeticInput}
              changeHandler={foodDiabeticInputHandler}
            />
          </div>
        </fieldset>

        <button className="btn btn--light cta__btn" formAction="submit">
          l??trehoz
        </button>
      </form>
    </Card>
  );
};

export default NewPartner;

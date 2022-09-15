import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Пожалуйста введите кол-во от 1 до 10</p>}
    </form>
  );
}

export default MealItemForm;

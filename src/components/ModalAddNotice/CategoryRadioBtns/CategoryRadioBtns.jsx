import {
  RadioBtnWrap,
  LabelRadioBtn,
  InputRadio,
} from './CategoryRadioBtns.styled';

export const CategoryRadioBtns = ({ onChange, category }) => {
  const onChangeHandler = e => {
    onChange(e.target.value, 'category');
  };

  return (
    <RadioBtnWrap>
      <LabelRadioBtn category={category} value={'lost/found'}>
        <InputRadio
          type="radio"
          name="category"
          value="lost/found"
          onChange={onChangeHandler}
        />
        lost-found
      </LabelRadioBtn>
      <LabelRadioBtn category={category} value={'in good hands'}>
        <InputRadio
          type="radio"
          name="category"
          value="in good hands"
          onChange={onChangeHandler}
        />
        in good hands
      </LabelRadioBtn>
      <LabelRadioBtn category={category} value={'sell'}>
        <InputRadio
          type="radio"
          name="category"
          value="sell"
          onChange={onChangeHandler}
        />
        sell
      </LabelRadioBtn>
    </RadioBtnWrap>
  );
};

import { ReactComponent as MaleIcon } from '../../../staticImages/male.svg';
import { ReactComponent as FemaleIcon } from '../../../staticImages/female.svg';
import { Label } from '../ModalAddNotice.styled';
import { SexRadioWrap, RadioSexLabel, InputRadio } from './SexRadioBtns.styled';

export const SexRadioBtns = ({ sex, onChange }) => {
  const onChangeHandler = e => {
    onChange(e.target.value, 'sex');
  };

  return (
    <>
      <Label>
        <div>
          The sex<span>*</span>
        </div>
      </Label>
      <SexRadioWrap>
        <RadioSexLabel sex={sex} value={'male'}>
          <InputRadio
            type="radio"
            name="sex"
            value="male"
            onChange={onChangeHandler}
          />
          <MaleIcon />
          Male
        </RadioSexLabel>
        <RadioSexLabel sex={sex} value={'female'}>
          <InputRadio
            type="radio"
            name="sex"
            value="female"
            onChange={onChangeHandler}
          />
          <FemaleIcon />
          Female
        </RadioSexLabel>
      </SexRadioWrap>
    </>
  );
};

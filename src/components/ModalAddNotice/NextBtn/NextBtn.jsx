import { Button } from './NextBtn.styled';

export const NextBtn = ({
  onClick,
  type = 'button',
  text = 'Next',
  disabled = false,
}) => {
  const clickHandler = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };

  return (
    <Button type={type} onClick={clickHandler} disabled={disabled}>
      {text}
    </Button>
  );
};

import { Button } from './CancelBtn.styled';

export const CancelBtn = ({ onClick, text = 'Cancel' }) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <Button type="button" onClick={clickHandler}>
      {text}
    </Button>
  );
};

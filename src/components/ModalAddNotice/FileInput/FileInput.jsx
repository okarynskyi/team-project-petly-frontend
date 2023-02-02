import { BsPlusLg } from 'react-icons/bs';
import { InputFile, AddImgIcon, PrevievImg } from './FileInput.styled';

export const FileInput = ({ preview, onAddImg }) => {
  const fileHandler = e => {
    onAddImg(e.target.files[0]);
  };

  return (
    <div>
      <label>
        Load the pet’s image
        {!preview && (
          <AddImgIcon>
            <BsPlusLg />
          </AddImgIcon>
        )}
        {preview && <PrevievImg src={preview} alt="Previev" />}
        <InputFile
          type="file"
          accept="image/jpeg, image/png"
          onChange={fileHandler}
          multiple
        />
      </label>
    </div>
  );
};

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { HiOutlinePlus } from 'react-icons/hi';
import { FormikWizard } from 'formik-wizard-form';
import { schema1, schema2 } from './schemas';
import { getCurrent } from '../../helpers/formatDate';
import Modal from '../common/Modal/Modal';
import { addPet } from '../../redux/user/userOperations';
import {
  WrapperAddPet,
  StyledPlus,
  AddPetBtn,
  WrapperModalAddPet,  FormAdd,
  BowInputs,
  InputStyled,
  InputStyledComment,
  TitleModal,
  LabelStyled,
  TextAddPhoto,
  LabelEdd,
  Error,
  Preview,
} from './ModalAddsPet.styled';
import {
  AccentButton,
  StyledButton,
} from 'components/common/StyledButton/StyledButton.styled';
import { HiddenInput } from 'components/UserData/UserData.styled';

const ModalAddPet = () => {
  const [modalActive, setModalActive] = useState(false);
  const [onAddFile, setOnAddFile] = useState(null);
  const [preview, setPreview] = useState('');
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    birthday: '',
    breed: '',
    comments: '',
  };

  const handleSubmit = ({ name, birthday, breed, comments }, fn) => {
    const data = new FormData();
    data.append('name', name);
    data.append('birthday', birthday);
    data.append('breed', breed);
    data.append('imageURL', onAddFile);
    data.append('comments', comments);
    if (!onAddFile) {
      toast.error('photo is requare');
      return;
    }
    dispatch(addPet(data));
    fn.resetForm();
    setModalActive(false);
  };

  const ModalAddPetOne = () => {
    return (
      <>
        <TitleModal>Add pet</TitleModal>
        <BowInputs>
          <LabelStyled htmlFor="name">
            Name pet*
            <InputStyled
              name="name"
              type="text"
              id="name"
              placeholder="Type name pet"
            />
            <Error name="name" component="div" />
          </LabelStyled>
          <LabelStyled>
            Date of birth*
            <InputStyled
              name="birthday"
              onfocus="(this.type='date')"
              type="date"
              max={getCurrent()}
              placeholder="Type date of birth"
            />
            <Error name="birthday" component="p" />
          </LabelStyled>
          <LabelStyled>
            Breed*
            <InputStyled name="breed" placeholder="Type breed" />
            <Error name="breed" component="p" />
          </LabelStyled>
        </BowInputs>
      </>
    );
  };

  const ModalAddPetTwo = () => {
    const handleChange = e => {
      setOnAddFile(e.currentTarget.files[0]);
      const reader = new FileReader();
      reader.onload = function (e) {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(e.currentTarget.files[0]);
    };

    return (
      <>
        <TitleModal>Add pet</TitleModal>
        <BowInputs>
          <div>
            <TextAddPhoto>Add photo and some comments*</TextAddPhoto>
            <HiddenInput 
              type="file"
              name="petsPhotoURL"
              id="petsPhotoURL"
              accept="image/png, image/jpeg, image/jpg, image/bmp"
              onChange={handleChange}
            />
            {!preview ? (
              <LabelEdd htmlFor="petsPhotoURL">
                <HiOutlinePlus color="grey" size="70px" />
              </LabelEdd>
            ) : (
              <Preview src={preview} alt="Previev" />
            )}
          </div>
          <LabelStyled htmlFor="comments">
            Comments*
            <Error name="comments" component="p" />
            <InputStyledComment
              name="comments"
              type="textarea"
              id="comments"
              placeholder="Type comments"
            />
          </LabelStyled>
        </BowInputs>
      </>
    );
  };

  return (
    <main>
      <WrapperAddPet>
        <p>Add pet </p>
        <AddPetBtn onClick={() => setModalActive(true)}>
          <StyledPlus />
        </AddPetBtn>
      </WrapperAddPet>
      <Modal active={modalActive} setActive={setModalActive}>
        <WrapperModalAddPet>
          <FormikWizard
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validateOnNext
            activeStepIndex={0}
            steps={[
              {
                component: ModalAddPetOne,
                validationSchema: schema1,
              },
              {
                component: ModalAddPetTwo,
                validationSchema: schema2,
              },
            ]}
          >
            {({ renderComponent, handlePrev, handleNext, isLastStep }) => (
              <FormAdd encType="multipart/form-data">
                {renderComponent()}
                {!isLastStep ? (
                  <div>
                    <AccentButton
                      type="button"
                      size="180px"
                      onClick={handleNext}
                    >
                      Next
                    </AccentButton>
                    <StyledButton
                      type="button"
                      size="180px"
                      onClick={() => setModalActive(false)}
                    >
                      Cancel
                    </StyledButton>
                  </div>
                ) : (
                  <div>
                    <AccentButton type="submit" size="180px">
                      Done
                    </AccentButton>
                    <StyledButton
                      type="button"
                      size="180px"
                      onClick={handlePrev}
                    >
                      Back
                    </StyledButton>
                  </div>
                )}
              </FormAdd>
            )}
          </FormikWizard>
        </WrapperModalAddPet>
      </Modal>
    </main>
  );
};
export default ModalAddPet;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { HiOutlinePlus } from 'react-icons/hi';
import { FormikWizard } from 'formik-wizard-form';
import { schema1, schema2 } from './schemas';
import Modal from '../common/Modal/Modal';
import { addPet } from '../../redux/user/userOperations';
import {
  WrapperAddPet,
  StyledPlus,
  AddPetBtn,
  WrapperModalAddPet,
} from './ModalAddsPet.styled';
import {
  AccentButton,
  StyledButton,
} from 'components/common/StyledButton/StyledButton.styled';
import {
  FormAdd,
  BowInputs,
  InputStyled,InputStyledComment,
  TitleModal,
  LabelStyled,
  TextAddPhoto,LabelEdd, Hidden, Error
} from './ModalAddsPet.styled';

const ModalAddPet = () => {
  const [modalActive, setModalActive] = useState(false);
  const [onAddFile, setOnAddFile] = useState(null);
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
            Name pet
            <InputStyled
              name="name"
              type="text"
              id="name"
              placeholder="Type name pet"
            />
            <Error name="name" component='div'/>
          </LabelStyled>
          <LabelStyled>
            Date of birth
            <InputStyled
              name="birthday"
              type="date"
              placeholder="Type date of birth"
            />
            <Error name="birthday" component='p'/>
          </LabelStyled>
          <LabelStyled>
            Breed
            <InputStyled name="breed" placeholder="Type breed" />
            <Error name="breed" component='p'/>
          </LabelStyled>
        </BowInputs>
      </>
    );
  };

  const ModalAddPetTwo = () => {
    const handleChange = e => {
      setOnAddFile(e.currentTarget.files[0]);
    };

    return (
      <>
        <TitleModal>Add pet</TitleModal>
        <BowInputs>
          <div>
            <TextAddPhoto>Add photo and some comments</TextAddPhoto>
            <Hidden
              type="file"
              name="petsPhotoURL"
              id="petsPhotoURL"
              multiple
              accept="image/*"
              onChange={handleChange}
            />
            <LabelEdd htmlFor="petsPhotoURL">
              <HiOutlinePlus color='grey' size='70px'/>
            </LabelEdd>
          </div>
          <LabelStyled htmlFor="comments">
            Comments*
            <Error name="comments" component='p'/>
            <InputStyledComment
              name="comments"
              type="text"
              id="comments"
              placeholder="Type comments"
            /></LabelStyled> 
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
              <FormAdd FormAdd encType="multipart/form-data">
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

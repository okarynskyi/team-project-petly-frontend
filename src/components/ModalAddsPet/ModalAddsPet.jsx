import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { HiOutlinePlus, HiX } from 'react-icons/hi';
import { FormikWizard } from 'formik-wizard-form';
import { schema1, schema2 } from './schemas';
import { getCurrent } from '../../helpers/formatDate';
import { ModalUser } from './Modal';
import { addPet } from '../../redux/user/userOperations';
import {
  WrapperAddPet,
  StyledPlus,
  AddPetBtn,
  WrapperModalAddPet,
  FormAdd,
  BowInputs,
  InputStyled,
  StyledComment,
  TitleModal,
  LabelStyled,
  TextAddPhoto,
  LabelEdd,
  Error,
  Preview,
  ModalButton,
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

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setModalActive(false);
    }
  };
  window.addEventListener('keydown', handleKeyDown);
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
    setPreview(null);
    setModalActive(false);
    document.body.style.overflow = 'auto';
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
            <StyledComment
              name="comments"
              id="comments"
            //  wrap="hard"
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
        <AddPetBtn
          onClick={() => {
            setModalActive(true);
            document.body.style.overflow = 'hidden';
          }}
        >
          <StyledPlus />
        </AddPetBtn>
      </WrapperAddPet>
      {modalActive && (
        <ModalUser>
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
                        onClick={() => {
                          setModalActive(false);
                          document.body.style.overflow = 'auto';
                        }}
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
          <ModalButton
            type="button"
            onClick={() => {
              setModalActive(false);
              document.body.style.overflow = 'auto';
            }}
          >
            <HiX color="#111111" size="34px" />
          </ModalButton>
        </ModalUser>
      )}
    </main>
  );
};
export default ModalAddPet;

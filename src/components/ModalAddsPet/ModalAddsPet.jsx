import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { HiOutlinePlus } from 'react-icons/hi';
import { schema1, schema2 } from './schemas';
import { getCurrent } from 'helpers/formatDate';
import { Modal } from '../common/Modal/Modal';
import { addPet } from 'redux/user/userOperations';
import {
  WrapperAddPet,
  StyledPlus,
  AddPetBtn,
  FormAdd,
  BowInputs,
  InputStyled,
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
import { Formik } from 'formik';
import { ModalContentAddPets1, 
  ModalContentAddPets2,
  WrapperModalAddPet1,
  WrapperModalAddPet2,
 } from '../common/Modal/Modal.styled';
import { ModalCloseBtn } from 'components/common/ModalCloseBtn/ModalCloseBtn';

const ModalAddPet = () => {
  const [modalActive, setModalActive] = useState(false);
  const [datat, setDatat] = useState({
    name: '',
    birthday: '',
    breed: '',
    comments: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [preview, setPreview] = useState('');
  const dispatch = useDispatch();
  const [onAddFile, setOnAddFile] = useState(null);

  const makeRequest = formData => {
    dispatch(addPet(formData));
    setOnAddFile(null);
    setPreview(null);
    document.body.style.overflow = 'auto';
    modalCloseEscapeRemove();
  };
  const modalCloseEscape = () => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setModalActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  };
  const modalCloseEscapeRemove = () => {
    window.addEventListener('keydown', modalCloseEscape);
  };

  const handleNextStep = (newData, final = false) => {
    setDatat(prev => ({ ...prev, ...newData }));
    if (final) {
      const newInfo = new FormData();
      newInfo.append('name', newData.name);
      newInfo.append('birthday', newData.birthday);
      newInfo.append('breed', newData.breed);
      newInfo.append('imageURL', onAddFile);
      newInfo.append('comments', newData.comments);
      if (!onAddFile) {
        toast.error('photo is required');
        return;
      }
      makeRequest(newInfo);
      setModalActive(false);
      setDatat({
        name: '',
        birthday: '',
        breed: '',
        comments: '',
      });
      setCurrentStep(0);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };
  const handlePrevStep = newData => {
    setDatat(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const ModalAddPetOne = props => {
    const handleSubmit = values => {
      props.next(values);
    };
    return (
      <Formik
        validationSchema={schema1}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <FormAdd>
            <TitleModal>Add pet</TitleModal>
            <BowInputs>
              <LabelStyled htmlFor="name">
                Name pet*
                <InputStyled
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Type pet`s name"
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
            <div>
              <AccentButton type="submit" size="180px">
                Next
              </AccentButton>
              <StyledButton
                type="button"
                size="180px"
                onClick={() => {
                  setModalActive(false);
                  document.body.style.overflow = 'auto';
                  modalCloseEscapeRemove();
                }}
              >
                Cancel
              </StyledButton>
            </div>
          </FormAdd>
        )}
      </Formik>
    );
  };
  const ModalAddPetTwo = props => {
    const handleSubmit = values => {
      props.next(values, true);
    };
    const handleChange = e => {
      setOnAddFile(e.currentTarget.files[0]);
      const reader = new FileReader();
      reader.onload = function (e) {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(e.currentTarget.files[0]);
    };

    return (
      <Formik
        validationSchema={schema2}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {formProps => (
          <FormAdd>
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
              <LabelStyled>
                Comments*
                <InputStyled
                  name="comments"
                  placeholder="Type comments"
                  style={{ height: '110px' }}
                />
                <Error name="comments" component="p" />
              </LabelStyled>
            </BowInputs>
            <div>
              <AccentButton type="submit" size="180px">
                Done
              </AccentButton>
              <StyledButton
                type="button"
                size="180px"
                onClick={() => props.prev(formProps.values)}
              >
                Back
              </StyledButton>
            </div>
          </FormAdd>
        )}
      </Formik>
    );
  };
  const steps = [
    <ModalAddPetOne next={handleNextStep} data={datat} />,
    <ModalAddPetTwo next={handleNextStep} prev={handlePrevStep} data={datat} />,
  ];
  return (
    <div>
      <WrapperAddPet>
        <p>Add pet </p>
        <AddPetBtn
          onClick={() => {
            setModalActive(true);
            document.body.style.overflow = 'hidden';
            modalCloseEscape();
          }}
        >
          <StyledPlus />
        </AddPetBtn>
      </WrapperAddPet>
      {
      // modalActive && (
        <Modal
        active={modalActive}
        setActive={setModalActive}>
          {currentStep === 0 ? (
            <ModalContentAddPets1
            className={modalActive ? "modal-content active" : "modal-content"}>
              {' '}
              <WrapperModalAddPet1>
                {steps[0]}{' '}
                <ModalCloseBtn
                setModalActive={setModalActive}
                />
              </WrapperModalAddPet1>
            </ModalContentAddPets1>
          ) : (
            <ModalContentAddPets2
            className={modalActive ? "modal-content active" : "modal-content"}>
              <WrapperModalAddPet2>
                {steps[1]}{' '}
                <ModalCloseBtn
                setModalActive={setModalActive}/>
              </WrapperModalAddPet2>
            </ModalContentAddPets2>
          )}
        </Modal>
      // )
      }
    </div>
  );
};
export default ModalAddPet;
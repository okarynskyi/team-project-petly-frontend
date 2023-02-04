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
import { useState } from 'react';
import { schema1, schema2 } from './schemas';
import { useDispatch } from 'react-redux';
import Modal from '../common/Modal/Modal';
import { FormikWizard } from 'formik-wizard-form';
import { ModalAddPetOne } from './ModalAddPetOne';
import { ModalAddPetTwo } from './ModalAddPetTwo';
import { FormFormik } from '../LoginForm/LoginForm.styled';
import { addPet } from '../../redux/user/userOperations';

const ModalAddPet = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  // const [imageURL, setImageURL] = useState(null);

  // const inputFileHandler = file => {
  //   setImageURL(file);
  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);
  // };
  const initialValues = {
    name: '',
    birthday: '',
    breed: '',
    // petsPhotoURL: '',
    comments: '',
  };
  const handleSubmit = ({ name, birthday, breed, comments }) => {
    //   console.log('handle', (e.currentTarget));
    //   const { name, birthday, breed,comments } = e.target.elements;
    //   console.log({ name, birthday, breed, comments });
    //   const data = new FormData();
    //  data.append('name', name);
    //   data.append('comments', comments);
    //    data.append('birthday', birthday);
    //   data.append('breed', breed);
    //   data.append('imageURL', imageURL);
    dispatch(addPet({ name, birthday, breed, comments }));
    setModalActive(false);
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
          <h3>Add pet</h3>
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
              <FormFormik encType="multipart/form-data">
                {renderComponent()}
                {!isLastStep ? (
                  <>
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
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </FormFormik>
            )}
          </FormikWizard>
        </WrapperModalAddPet>
      </Modal>
    </main>
  );
};
export default ModalAddPet;

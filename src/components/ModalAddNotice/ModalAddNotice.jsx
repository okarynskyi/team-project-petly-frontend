import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../common/Modal/Modal';
import { NextBtn } from './NextBtn/NextBtn';
import { CancelBtn } from './CancelBtn/CancelBtn';

import { CategoryRadioBtns } from './CategoryRadioBtns/CategoryRadioBtns';
import { Date } from './Date/Date';
import { SexRadioBtns } from './SexRadioBtns/SexRadioBtns';
import { Location } from './Location/Location';
import { CommentField } from './CommentField/CommentField';
import { FileInput } from './FileInput/FileInput';
import { TextInput } from './TextInput/TextInput';
import { PriceField } from './PriceField/PriceField';

import operations from '../../redux/notices/noticesOperations';

import {
  WrapperAddPet,
  StyledPlus,
  AddPetBtn,
  WrapperModalAddPet,
} from '../ModalAddsPet/ModalAddsPet.styled';
import { Label, Error, BtnWrapper } from './ModalAddNotice.styled';
export const locationRegexp = /[A-Z][a-z]*,\s[A-Z][a-z]*/;

const ModalAddNotice = ({ onClose }) => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const [adopStatus, setAdopStatus] = useState('sell');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [location, setLocation] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [comments, setComments] = useState('');

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [preview, setPreview] = useState('');

  const radioBtnHandlder = (value, type) => {
    switch (type) {
      case 'category':
        setAdopStatus(value);
        break;
      case 'sex':
        setSex(value);
        break;
      default:
        return;
    }
  };

  const birthdayHandler = value => {
    setBirthday(value);
  };

  const validateTitle = value => {
    setTitle(value);
  };

  const validateName = value => {
    setName(value);
  };

  const validateLocation = value => {
    setLocation(value);
  };

  const validateBreed = value => {
    setBreed(value);
  };

  const validateComents = value => {
    setComments(value);
  };
  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const prevPage = () => {
    setPage(prevState => prevState - 1);
  };

  const inputFileHandler = file => {
    setAvatarURL(file);
    const reader = new FileReader();

    reader.onload = function (e) {
      setPreview(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const submitForm = values => {
    const { title, name, breed, comments, price } = values;

    const data = new FormData();

    data.append('title', title);
    data.append('adopStatus', adopStatus);
    data.append('comments', comments);

    price && data.append('price', price);
    name && data.append('name', name);
    birthday && data.append('birthday', birthday);
    breed && data.append('breed', breed);
    sex && data.append('sex', sex);
    location && data.append('location', location);
    avatarURL && data.append('avatarURL', avatarURL);

    dispatch(operations.createNotice(data));
    // onClose(setModalActive);
  };

  const initialValues = {
    title: '',
    name: '',
    breed: '',
    comments: '',
    location: '',
    price: '',
  };

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(48, 'Too Long!')
      .required('Required'),
    name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!'),
    breed: Yup.string().min(2, 'Too Short!').max(24, 'Too Long!'),
    location: Yup.string()
      .matches(locationRegexp)
      .required('Location is required'),
    comments: Yup.string()
      .min(8, 'Too Short!')
      .max(120, 'Too Long!')
      .required('Required'),
    price: Yup.number()
      .min(1, 'Price has to be more than 0')
      .max(1000000, 'Price has to be less than 1 000 000'),
  });

  const stateMachine = {
    page_1: page === 1,
    page_2: page === 2,
    priceIsTurnedOn: adopStatus === 'sell',
    nextButtonIsAbled:
      title.length >= 2 &&
      title.length <= 48 &&
      (name.length === 0 || (name.length >= 2 && name.length <= 24)) &&
      (breed.length === 0 || (breed.length >= 2 && breed.length <= 16)),
    submitButtonIsAbled:
      (location && comments.length >= 8 && comments.length <= 120) ||
      (!location && comments.length >= 8 && comments.length <= 120),
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
          <p>Fill the fields below, please.</p>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={values => submitForm(values)}
            validateOnChange
          >
            {({ errors, touched }) => (
              <Form encType="multipart/form-data">
                {stateMachine.page_1 && (
                  <>
                    <CategoryRadioBtns
                      onChange={radioBtnHandlder}
                      category={adopStatus}
                    />
                    <div>
                      <Label>
                        <div>
                          Title of ad <span>*</span>
                        </div>
                        <TextInput
                          name="title"
                          validate={validateTitle}
                          placeholder="Type title"
                        />
                        {touched.title && errors.title && (
                          <Error>{errors.title}</Error>
                        )}
                      </Label>
                      <Label>
                        Name pet
                        <TextInput
                          name="name"
                          validate={validateName}
                          placeholder="Type name pet"
                        />
                        {touched.name && errors.name && (
                          <Error>{errors.name}</Error>
                        )}
                      </Label>
                      <Date
                        inputProps={{
                          readOnly: true,
                          id: 'birth',
                          placeholder: 'Choose date',
                        }}
                        value={birthday}
                        onChange={birthdayHandler}
                        timeFormat={false}
                        closeOnSelect={true}
                        dateFormat="DD.MM.YYYY"
                      />
                      <Label>
                        Breed
                        <TextInput
                          name="breed"
                          validate={validateBreed}
                          placeholder="Type breed"
                        />
                        {touched.breed && errors.breed && (
                          <Error>{errors.breed}</Error>
                        )}
                      </Label>
                    </div>{' '}
                  </>
                )}
                {stateMachine.page_2 && (
                  <>
                    <SexRadioBtns sex={sex} onChange={radioBtnHandlder} />
                    <Label>
                      <Location
                        name="location"
                        validate={validateLocation}
                        placeholder="Type location"
                      />
                      {touched.location && errors.location && (
                        <Error>{errors.location}</Error>
                      )}
                    </Label>
                    {stateMachine.priceIsTurnedOn && (
                      <PriceField
                        name="price"
                        placeholder="Type the price"
                        required={true}
                        min="1"
                        touched={touched}
                        errors={errors}
                      />
                    )}
                    <FileInput preview={preview} onAddImg={inputFileHandler} />
                    <CommentField
                      touched={touched}
                      errors={errors}
                      name="comments"
                      validate={validateComents}
                    />
                  </>
                )}
                <BtnWrapper>
                  {stateMachine.page_1 && stateMachine.nextButtonIsAbled && (
                    <NextBtn onClick={nextPage} />
                  )}
                  {stateMachine.page_1 && !stateMachine.nextButtonIsAbled && (
                    <NextBtn onClick={nextPage} disabled={true} />
                  )}
                  {stateMachine.page_2 && stateMachine.submitButtonIsAbled && (
                    <NextBtn type="submit" text="Done" />
                  )}
                  {stateMachine.page_2 && !stateMachine.submitButtonIsAbled && (
                    <NextBtn type="submit" text="Done" disabled={true} />
                  )}

                  {stateMachine.page_1 ? (
                    <CancelBtn onClick={onClose} />
                  ) : (
                    <CancelBtn onClick={prevPage} text="Back" />
                  )}
                </BtnWrapper>
              </Form>
            )}
          </Formik>
        </WrapperModalAddPet>
      </Modal>
    </main>
  );
};
export default ModalAddNotice;

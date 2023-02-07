import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import operations from '../../redux/notices/noticesOperations';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
import { toast } from 'react-toastify';
import { ModalUser } from '../ModalAddsPet/Modal';
// import Modal from '../common/Modal/Modal';
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
import { HiX } from 'react-icons/hi';
import {
  StyledPlus,
  WrapperModalAddPet,
  ModalButton,
} from '../ModalAddsPet/ModalAddsPet.styled';
import {
  Label,
  Error,
  Title,
  Subtitle,
  FormStyled,
  InputFieldWrap,
  BtnWrap,
  WrapperAddNotice,
  AddPetNotice,
  TextAdd,
  TextAddLeft,
} from './ModalAddNotice.styled';
export const locationRegexp = /[A-Z][a-z]*,\s[A-Z][a-z]*/;
export const titleRegexp = /^[a-zA-Z\s]*$/;

const ModalAddNotice = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const [adopStatus, setAdopStatus] = useState('sell');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [location, setLocation] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [comments, setComments] = useState('');

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [preview, setPreview] = useState('');
  const [isHidden, setisHidden] = useState(false);

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

  const validateComments = value => {
    setComments(value);
  };
  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const prevPage = () => {
    setPage(prevState => prevState - 1);
  };

  const inputFileHandler = file => {
    setImageURL(file);
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
    imageURL && data.append('imageURL', imageURL);

    dispatch(operations.createNotice(data));
    setisHidden(false);
    setModalActive(false);
  };

  const initialValues = {
    title: '',
    name: '',
    breed: '',
    comments: '',
    location: '',
    price: '',
    // sex: '',
    // birthday: '',
  };

  const schema = Yup.object().shape({
    title: Yup.string()
      .trim(true)
      .min(2, 'Too short!')
      .max(48, 'Too long!')
      .matches(titleRegexp, 'Must contain only letters and spaces')
      .required('Title is required'),
    name: Yup.string()
      .trim(true)
      .min(2, 'Too short!')
      .max(16, 'Too long!')
      .matches(titleRegexp, 'Must contain only letters and spaces')
      .required('Name is required'),
    breed: Yup.string()
      .trim()
      .min(2, 'Too short!')
      .max(24, 'Too long!')
      .matches(titleRegexp, 'Must contain only letters and spaces')
      .required('Breed is required'),
    location: Yup.string()
      .trim()
      .matches(
        locationRegexp,
        'For example, "Brovary, Kyiv" or "Akhtyrka, Sumy"'
      )
      .required('Location is required'),
    comments: Yup.string()
      .min(8, 'Too short!')
      .max(120, 'Too long!')
      .required('Comments is required'),
    price: Yup.number().min(1, 'Price has to be more than 0'),
    // sex: Yup.string().required('Choose sex'),
    // birthday: Yup.date().required('Choose date of birth'),
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
  return !token ? (
    <WrapperAddNotice>
      <TextAddLeft>Add pet </TextAddLeft>
      <AddPetNotice
        onClick={() => toast.error('You need to register or logged in!')}
      >
        <StyledPlus />
        <TextAdd>Add pet </TextAdd>
      </AddPetNotice>
    </WrapperAddNotice>
  ) : (
    <>
      <WrapperAddNotice hidden={isHidden}>
        <TextAddLeft>Add pet </TextAddLeft>
        <AddPetNotice
          onClick={() => {
            setModalActive(true);
            document.body.style.overflow = 'hidden';
            setisHidden(true);
          }}
        >
          <StyledPlus />
          <TextAdd>Add pet </TextAdd>
        </AddPetNotice>
      </WrapperAddNotice>
      {modalActive && (
        <ModalUser>
          <WrapperModalAddPet>
            <Title>Add pet</Title>
            <Subtitle>Fill the fields below, please.</Subtitle>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={values => submitForm(values)}
              validateOnChange
            >
              {({ errors, touched }) => (
                <FormStyled encType="multipart/form-data">
                  {stateMachine.page_1 && (
                    <>
                      <CategoryRadioBtns
                        onChange={radioBtnHandlder}
                        category={adopStatus}
                      />
                      <InputFieldWrap>
                        <Label>
                          <div>
                            Title of ad<span>*</span>
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
                      </InputFieldWrap>{' '}
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
                      <FileInput
                        preview={preview}
                        onAddImg={inputFileHandler}
                      />
                      <CommentField
                        touched={touched}
                        errors={errors}
                        name="comments"
                        validate={validateComments}
                      />
                    </>
                  )}
                  <BtnWrap>
                    {stateMachine.page_1 && stateMachine.nextButtonIsAbled && (
                      <NextBtn onClick={nextPage} />
                    )}
                    {stateMachine.page_1 && !stateMachine.nextButtonIsAbled && (
                      <NextBtn onClick={nextPage} disabled={true} />
                    )}
                    {stateMachine.page_2 &&
                      stateMachine.submitButtonIsAbled && (
                        <NextBtn type="submit" text="Done" />
                      )}
                    {stateMachine.page_2 &&
                      !stateMachine.submitButtonIsAbled && (
                        <NextBtn type="submit" text="Done" disabled={true} />
                      )}

                    {stateMachine.page_1 ? (
                      <CancelBtn
                        onClick={() => {
                          setModalActive(false);
                          document.body.style.overflow = 'hidden';
                        }}
                      />
                    ) : (
                      <CancelBtn onClick={prevPage} text="Back" />
                    )}
                  </BtnWrap>
                </FormStyled>
              )}
            </Formik>
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
    </>
  );
};
export default ModalAddNotice;

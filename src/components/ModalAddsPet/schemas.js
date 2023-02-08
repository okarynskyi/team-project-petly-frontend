import * as yup from 'yup';
const nameRegexp = /^[a-zA-Z]{2,16}$/;
const commentRegexp = /^[a-zA-Z]{8,120}$/;
export const schema1 = yup.object({
    name: yup
      .string()
      .min(2, 'Name must consist of at least 2 symbols')
      .max(16, 'Name must contain no more than 16 symbols').matches(
        nameRegexp,
        'Please, in English"'
      )
      .required('Name is required'),
    breed: yup
      .string()
      .min(2, 'Breed must consist of at least 2 symbols')
      .max(16, 'Breed must contain no more than `16` symbols')
      .required('Breed is required'),
    birthday: yup.date().required('Date is required'),
  });
 export const schema2 = yup.object({
    comments: yup
      .string()
      .min(8, 'Comments must consist of at least 8 symbols')
      .max(120, 'Comments must contain no more than 120 symbols').matches(
        commentRegexp,
        'Please, in English"'
      )
      .required('Comments is required'),
 });


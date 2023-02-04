import { ErrorMessage } from 'formik';
import {
  BoxInput,
  InputFormik,
  Label,
} from '../RegisterForm/RegisterForm.styled';
// import { useState, useEffect } from 'react';

export const ModalAddPetTwo = ({onAdd}) => {
    // const [onAddFile, setOnAddFile] = useState(null);
    //  useEffect(() => {
    //      console.log('updattte');
    //  }, [onAddFile]);

    // console.log(onAddFile);
//   const UploadFile = async fileSelect => {
//     const imageURL = new FormData();
//     imageURL.append('imageURL', fileSelect);
//     console.log(imageURL);
//     setOnAddFile(imageURL);
//   };

//   const handleChange = e => {
//     const fileSelect = e.target.files[0];
//     console.log(fileSelect);
//     UploadFile(fileSelect);
//   };

  return (
    <BoxInput>
      Add photo and some comments
          {/* <label htmlFor="petsPhotoURL">
              <div style={{width:'100px', height:'100px'}}>image</div>
             <InputFormik
                  type="file"
                  name="petsPhotoURL"
                  id="petsPhotoURL"
                  multiple
                  accept="image/*,.png, .jpg"
                  onChange={(event) => {
                      setOnAddFile(event.currentTarget.files[0]);
                      console.log(event.currentTarget.files[0])
                  }}
      />  <ErrorMessage name="petsPhotoURL" />
          </label> */}
      
      <Label>
        Date of birth
        <InputFormik name="comments" type="text" placeholder="Type comments" />
        <ErrorMessage name="comments" />
      </Label>
    </BoxInput>
  );
};

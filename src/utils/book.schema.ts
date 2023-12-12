import * as yup from 'yup';
export const bookSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  description: yup.string().required(),
}).required();



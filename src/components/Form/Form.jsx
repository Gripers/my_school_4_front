import styles from './Form.module.scss';

import { Button, Input } from 'rsuite';
import toast from 'react-hot-toast';

import { useSubmitFormMutation } from '../../store/reducers/subFormReqSlice';
import Spinner from '../Spinner/Spinner';

const Form = () => {
  const [submitForm, { isLoading }] = useSubmitFormMutation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const html = `
<b>Name:</b> ${event.target[0].value}
<b>Phone number:</b> ${event.target[1].value}
    `;

    if (!event.target[0].value, !event.target[1].value)
      toast.error("Hamma ma'lumotlarni to'ldiring!");
    else
      submitForm(html)
        .unwrap()
        .then(() => {
          toast.success("Ma'lumotlar muvaffaqiyatli jo'natildi");
          setTimeout(() => window.location.reload(), 1000);
        })
        .catch(() =>
          toast.error(
            "Ma'lumotlar to'g'riligini tekshiring yoki yana bir bor urinip ko'ring"
          )
        );
  };

  return (
    <div className={styles.container}>
      <h1>My School</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input placeholder='Name' />
        <Input type='number' placeholder='Number' />
        <Button type='submit' color='blue' appearance='primary'>
          {isLoading ? <Spinner /> : "Ro'yxatdan o'tish"}
        </Button>
      </form>
    </div>
  );
};

export default Form;

import Modal from '../../components/Modal/Modal'
import { Card } from './ModalAddsPet.styled';

const ModalAddPet = ({setActive, active}) => {
  return (
    <main>
      <Modal 
      active={active} 
      setActive={setActive}
      >
        <Card>
        <>
       text
        </>
        </Card>
      </Modal>
    </main>
  );
};

export default ModalAddPet;
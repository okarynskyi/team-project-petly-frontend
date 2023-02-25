import { ModalButton } from "./ModalCloseBtn.styled"
import { HiX } from 'react-icons/hi';

export const ModalCloseBtn = ({ setModalActive}) => {

    return (
        <ModalButton
                  type="button"
                  onClick={() => {
                    setModalActive(false);
                    document.body.style.overflow = 'auto';
                  }}
                >
                  <HiX color="#111111" size="34px" />
                </ModalButton>
    )
}
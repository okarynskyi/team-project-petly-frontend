import {CircleBtn} from "../../components/common/CircleBtn.styled"
import { HiOutlinePlus} from 'react-icons/hi';

const AddNoticeButton = ({onClick})  => {
  

    return ( 
        <CircleBtn 
        onClick={onClick}
        >AddPet<HiOutlinePlus color="#F59256" size="20px" /></CircleBtn>
    )
}

export default AddNoticeButton
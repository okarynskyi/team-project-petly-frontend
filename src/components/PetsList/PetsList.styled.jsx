import styled from 'styled-components';
import { device } from 'Device';
import { CircleBtn } from 'components/common/CircleBtn.styled';

export const ListPets = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const CardPet = styled.li`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 20px 20px 40px;
  @media ${device.tablet} {
    flex-direction: row;
    gap: 32px;
    padding: 20px;
    border-radius: 40px;
  }
`;
export const ImgPet = styled.img`
  border-radius: 20px;
  @media ${device.tablet} {
    border-radius: 40px;
  }
`;
export const WrapperInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 240px;
  flex-direction: column;
  gap: 12px;
  @media ${device.tablet} {
    width: 470px;
  }
`;
export const InfoPet = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #000000;
  > span {
    font-weight: 400;
    line-height: 1.57;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`;
export const CircleBtnTrash = styled(CircleBtn)`
  width: 38px;
  height: 38px;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
`;

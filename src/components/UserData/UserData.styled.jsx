import styled from 'styled-components';

export const CardProfile = styled.div`
  width: 280px;
  margin: 0 auto;
  padding: 20px 0;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
`;
export const AvatarWrapper = styled.div`
  position: relative;
  > input {
    display: none;
  }
`;
export const Avatar = styled.img`
  margin: 0 auto 70px;
  width: 233px;
`;
export const LabelEditPhoto = styled.label`
  position: absolute;
  right: 24px;
  bottom: -12px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  color: #111111;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  gap: 4px;
`;
export const ListUserInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
    padding: 0 12px 0 16px;
`;
export const ItemUserInfo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  >div {
     display: flex;
  justify-content: space-between;
  align-items: center;
  }
`;

import styled from 'styled-components';

export const ProfileImage = styled.img`
  border-radius: 50%;
  background-color: #1165ba;
  width: 100px;
  height: 100px;
  cursor: pointer;
  overflow: hidden;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const ActiveProfile = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
`;

export const ActiveProfileTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #515050;
  text-align: center;
  margin-top: 12px;
`;

export const ActiveProfileStatus = styled.span`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
`;
export const EditProfile = styled.span`
  display: block;
  text-align: center;
  font-weight: 600;
  color: #1165ba;
`;

export const ActiveProfileDescription = styled.p`
  text-align: center;
  font-size: 14px;
  color: #515050;
`;

export const DivisionBar = styled.div`
  width: 100%;
  margin: 28px auto;
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
`;

export const ProfileJobsBoard = styled.div`
  display: flex;
  gap: 13px;
  width: 100%;
  max-width: 238px;
  margin-bottom: 18px;
`;
export const ProfilesJobsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProfilesJobsBoardImg = styled.div`
  width: 40px;
  height: 40px;
  justify-content: flex-start;
  margin-top: 13px;
  background-color: #00d98f;
`;

export const YourJobsTitle = styled.h2`
  font-size: 14px;
  font-weight: 700;
  color: #5e5e5e;
  line-height: 17px;
  margin-bottom: 32px;
`;

export const ProfilesJobsInfoTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #515050;
`;

export const ProfilesJobsInfoDescription = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #5e5e5e;
  padding-bottom: 2px;
`;
export const ProfilesJobsInfoStatus = styled(ProfilesJobsInfoDescription)`
  font-size: 12px;
`;

import styled from 'styled-components';


// export const Container = styled.div`
//   background-color: #ffffff;
//   border-radius: 8px;
//   width: 493px;
//   height: 131px;
//   padding: 16px;
//   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
// `;

// export const Header = styled.div`
//   display: flex;
//   gap: 12px;
// `;

// export const Profile = styled.img`

// `

// export const Title = styled.h2`
//   font-size: 16px;
//   font-weight: 600;
//   margin: 0 0 4px 0;
//   color: #515050;
//   line-height: 19px;
// `;

// export const Company = styled.p`
//   font-size: 14px;
//   color: #555555;
//   margin: 0;
// `;

// export const Info = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 8px 0;
// `;

// export const Location = styled.p`
//   font-size: 14px;
//   margin: 0;
// `;

// export const JobDetails = styled.p`
//   font-size: 14px;
//   color: #555555;
//   margin: 0;
// `;

// export const PublishedAt = styled.p`
//   font-size: 12px;
//   color: #aaaaaa;
//   margin: 0;
// `;

export const Card = styled.div`
  border: 1px solid #A3CCFA;
  border-radius: 6px;
  display: flex;
  width: 493px;
  padding: 16px;
  height: 131px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
`;

export const Logo = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 12px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #515050;
    margin-bottom: 8px;
`;

export const Company = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
  color: #515050;
`;

export const Location = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #515050;
    margin-bottom: 8px;
`;

export const Type = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #515050;
`;

export const PublishedAt = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #515050;
    align-self: flex-end;
`;
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { useApi } from '../../../hooks/useApi';
import { ProfileImageWrapper, ProfileImage } from './styles';

const FeedProfile = () => {
  const [imageProfile, setImageProfile] = useState('');
  const api = useApi();
  const { user }: any = useContext(AuthContext);

  // ToDo: Fazer chamada para a API para pegar a imagem do perfil.
  //   useEffect(() => {
  //       async function fetchProfileImage() {
  //           try {
  //               const src = await api.getProfileImage(user.id);
  //              setImageProfile(src);
  //             console.log(src);
  //          } catch (error) {
  //            console.error(error);
  //        }
  //    }

  //    fetchProfileImage();
  // }, [user, api]);

  return (
    <ProfileImageWrapper>
      <Link to="/">
        <ProfileImage src={imageProfile} />
      </Link>
    </ProfileImageWrapper>
  );
};

export default FeedProfile;

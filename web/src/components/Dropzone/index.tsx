import React, { useCallback, useState } from 'react';

import { useDropzone } from 'react-dropzone';
import camIcon from '../../assets/images/icons/cam-icon.svg';
import userProfilePic from '../../assets/images/user2.svg';
import { Container } from './styles';

interface Props {
    onFileUploaded: (file: File) => void;
    isVisibleSelectedFile: boolean;
    isVisibleAvatarData: boolean;
}

const Dropzone:React.FC<Props> = ({
  onFileUploaded,
  isVisibleSelectedFile,
  isVisibleAvatarData,
}) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUlr = URL.createObjectURL(file);

    setSelectedFileUrl(fileUlr);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <Container className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      <img
        src={selectedFileUrl}
        alt="Imagem de perfil"
        className={isVisibleSelectedFile ? 'isVisibleSelectedFile' : 'isVisibleAvatarData'}
      />

      <button type="button">
        <img src={camIcon} alt="profile pic" />
      </button>
    </Container>

  );
};

export default Dropzone;

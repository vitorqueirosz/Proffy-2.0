import React, { useCallback, useState } from 'react';

import { useDropzone } from 'react-dropzone';
import Input from '../Input';

import { Container, Image } from './styles';

interface Props {
    onFileUploaded: (file: File) => void;
    isVisibleSelectedFile: boolean;
    isVisibleAvatarData: boolean;
}

const Dropzone: React.FC<Props> = ({
    onFileUploaded,
    isVisibleAvatarData,
    isVisibleSelectedFile
}) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);

        setSelectedFileUrl(fileUrl);
        onFileUploaded(file);
    }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    });

  return (
    <Container {...getRootProps()}>
      <Input {...getInputProps()} accept="image/*" />

      <Image source={selectedFileUrl} />
    </Container>
  )
}

export default Dropzone;

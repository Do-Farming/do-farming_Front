import React, { useState } from 'react';
import { Camera, CameraType } from 'expo-camera/legacy';

import ConvertIcon from 'react-native-vector-icons/MaterialIcons';
import CameraIcon from 'react-native-vector-icons/Entypo';
import {
  Button,
  ButtonContainer,
  Container,
  PreviewContainer,
  PreviewImage,
} from './CameraScreen.styled';

export default function CameraScreen() {
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<null | any>(null);

  const takePictureHandler = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync({ base64: true });
      setCapturedImage(photo);
      setPreviewVisible(true);
    }
  };

  const resetCamera = () => {
    setPreviewVisible(false);
    setCapturedImage(null);
  };

  return (
    <Container>
      {previewVisible && capturedImage ? (
        <PreviewContainer>
          <PreviewImage source={{ uri: capturedImage.uri }} />
          <Button onPress={resetCamera}>
            <CameraIcon name="camera" size={35} />
          </Button>
        </PreviewContainer>
      ) : (
        <Camera
          style={{ flex: 1 }}
          type={cameraType}
          ref={(ref) => setCamera(ref)}
        >
          <ButtonContainer>
            <Button
              onPress={() =>
                setCameraType(
                  cameraType === CameraType.back
                    ? CameraType.front
                    : CameraType.back,
                )
              }
            >
              <ConvertIcon name="loop" size={45} />
            </Button>
            <Button onPress={takePictureHandler}>
              <CameraIcon name="camera" size={35} />
            </Button>
          </ButtonContainer>
        </Camera>
      )}
    </Container>
  );
}

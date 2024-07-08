import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera/legacy';

import ConvertIcon from 'react-native-vector-icons/MaterialIcons';
import CameraIcon from 'react-native-vector-icons/Entypo';

import {
  Button,
  ButtonContainer,
  Container,
  DetectFail,
  DetectResult,
  DetectView,
  PreviewContainer,
  PreviewImage,
} from './CameraScreen.styled';

import { objectDetect, wakeupCertificate } from '../../../apis/wakeupService';
import { ObjectMapping } from '../../../constants/WakeupObject';

export default function CameraScreen({ navigation, route }: any) {
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<null | any>(null);
  const [detect, setDetect] = useState<boolean | null>(null);

  const object = route.params;

  const takePictureHandler = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync({ base64: true });
      setCapturedImage(photo.base64);
      setPreviewVisible(true);
    }
  };

  useEffect(() => {
    if (capturedImage) {
      objectDetect(capturedImage).then((res) => {
        console.log('Object Detection Result: ', res.data);
        if (res.data && res.data.length > 0) {
          const detectedClasses = res.data.map((item: any) => item.class);
          console.log(detectedClasses);
          setDetect(false);
          if (detectedClasses.includes(object)) {
            setDetect(true);
          }
        }
      });
    }
  }, [capturedImage, previewVisible]);

  const resetCamera = () => {
    setPreviewVisible(false);
    setCapturedImage(null);
    setDetect(null);
  };

  // detect가 true일 때 3.5초 후에 메인 페이지로 이동
  useEffect(() => {
    if (detect) {
      const fetchWakeup = async () => {
        await wakeupCertificate();
      };
      fetchWakeup();
      const timer = setTimeout(async () => {
        navigation.navigate('WakeUp');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [detect, navigation]);

  return (
    <Container>
      {previewVisible && capturedImage ? (
        <PreviewContainer>
          <PreviewImage
            source={{ uri: 'data:image/png;base64,' + capturedImage }}
          />
          {detect != null ? (
            detect ? (
              <DetectView>
                <DetectResult>
                  {ObjectMapping[object]} 인식에 성공했습니다.
                </DetectResult>
                <DetectResult>기상 인증 완료 되었습니다.</DetectResult>
              </DetectView>
            ) : (
              <DetectView>
                <DetectFail>
                  {ObjectMapping[object]} 인식에 실패했습니다.
                </DetectFail>
                <Button onPress={resetCamera}>
                  <CameraIcon name="camera" size={35} />
                </Button>
              </DetectView>
            )
          ) : null}
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

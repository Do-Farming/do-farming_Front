import React, { useState } from 'react';
import { Image, ImageLoadEventData, NativeSyntheticEvent } from 'react-native';

interface CardImageProps {
  uri: string;
  ImgHeight: number;
  ImgWidth: number;
}

const CardImage: React.FC<CardImageProps> = ({ uri, ImgHeight, ImgWidth }) => {
  const [shouldRotate, setShouldRotate] = useState(false);

  const handleImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { width, height } = event.nativeEvent.source;

    // 이미지의 가로가 세로보다 길 경우 회전 플래그 설정
    if (width > height) {
      setShouldRotate(true);
    } else {
      setShouldRotate(false);
    }
  };

  return (
    <Image
      source={{ uri }}
      style={{
        width: shouldRotate ? ImgHeight : ImgWidth, // 회전 후 가로 길이
        height: shouldRotate ? ImgWidth : ImgHeight, // 회전 후 세로 길이
        transform: shouldRotate ? [{ rotate: '90deg' }] : [], // 회전 조건 추가
        resizeMode: 'contain',
      }}
      onLoad={handleImageLoad}
    />
  );
};

export default CardImage;
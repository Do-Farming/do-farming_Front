import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    mainDarkColor: string;
    mainLightColor: string;
    hanaMainColor: string;
    hanaSubColor: string;

    grayColor: string;
    whiteColor: string;
    darkGrayColor: string;

    placeholderColor: string;

    // fontLarge: number;
    // fontMedium: number;
    // fontRegular: number;
    // fontSmall: number;

    // weightBold: number;
    // weightMedium: number;
    // weightRegular: number;
  }
}

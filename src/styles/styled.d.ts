import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    DarkGrayColor: string;
    buttonLigthColor: string;
    buttonBoldColor: string;
    defaultWhiteColor: string;
    placeholderColor: string;
    buttonBackgroundColor: string;

    hanaMainColor: string;
    hanaSubColor: string;
    // fontLarge: number;
    // fontMedium: number;
    // fontRegular: number;
    // fontSmall: number;

    // weightBold: number;
    // weightMedium: number;
    // weightRegular: number;
  }
}

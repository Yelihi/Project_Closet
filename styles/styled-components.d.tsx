import 'styled-components';
import { FontTypes, FontWeight, Colors, Size, Media } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakPoint: string;
    font: FontTypes;
    fontWeight: FontWeight;
    colors: Colors;
    size: Size;
    media: Media;
  }
}

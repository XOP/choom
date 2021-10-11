/* eslint import/no-webpack-loader-syntax: off */
import theme from "./build";

const defaultTheme = {
  spaceEighth: theme.spaceEighth,
  spaceQuarter: theme.spaceQuarter,
  spaceHalf: theme.spaceHalf,
  spaceThreeQuarters: theme.spaceThreeQuarters,
  spaceOne: theme.spaceOne,
  spaceOneAndHalf: theme.spaceOneAndHalf,
  spaceTwo: theme.spaceTwo,
  spaceThree: theme.spaceThree,
  spaceFour: theme.spaceFour,
  fontSizeS: theme.fontSizeS,
  fontSizeM: theme.fontSizeM,
  fontSizeN: theme.fontSizeN,
  fontSizeL: theme.fontSizeL,
  fontSizeXl: theme.fontSizeXl,
  fontSize2xl: theme.fontSize2xl,
  fontSize3xl: theme.fontSize3xl,
  fontSize4xl: theme.fontSize4xl,
  lineHeightN: theme.lineHeightN,
  lineHeightS: theme.lineHeightS,
  fontFamilyMain: theme.fontFamilyMain,
  fontFamilyFallback: theme.fontFamilyFallback,
  fontFamily: theme.fontFamily,
  radiusLight: theme.radiusLight,
  radiusRegular: theme.radiusRegular,
  radiusHeavy: theme.radiusHeavy,
  borderSizeLight: theme.borderSizeLight,
  borderSizeRegular: theme.borderSizeRegular,
  borderSizeHeavy: theme.borderSizeHeavy,

  colorThemeTemp: theme.colorThemeTemp,
  colorDarkTemp: theme.colorDarkTemp,
  colorLightTemp: theme.colorLightTemp,
};

export default defaultTheme;

export const MAP_SPACE = {
  0: 0,
  0.25: theme.spaceQuarter,
  0.5: theme.spaceHalf,
  0.75: theme.spaceThreeQuarters,
  1: theme.spaceOne,
  1.5: theme.spaceOneAndHalf,
  2: theme.spaceTwo,
  3: theme.spaceThree,
  4: theme.spaceFour,
};

export const SPACE_TYPES = [
  "0",
  "0.25",
  "0.5",
  "0.75",
  "1",
  "1.5",
  "2",
  "3",
  "4",
];

export const HEADING_LEVEL_TYPES = [
  1,
  2,
  3,
  4,
  5,
  6,
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];

export const TEXT_ALIGN_TYPES = ["center", "left", "right", "initial"];

export const INPUT_TYPES = [
  "button",
  "submit",
  "checkbox",
  "radio",
  "text",
  "number",
];

export const SIZES_TYPES = ["regular", "small", "big"];

export const DISPLAY_TYPES = ["block", "inline", "inline-block"];

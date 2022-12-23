import React, {ReactElement, memo} from 'react';
import {Text as NativeText, TextProps as NativeTextProps} from 'react-native';
import styles from '../styles/style';

enum TextType {
  bodyTextBold,
}
export interface TextProps extends NativeTextProps {
  textType?: TextType;
  children?: JSX.Element[] | JSX.Element | string | number;
}

const Text: React.FC<TextProps> = ({
  style = {},
  textType,
  children,
  ...rest
}): ReactElement<Text> => {
  return (
    <NativeText style={[textTypeMap.get(textType), style]} {...rest}>
      {children}
    </NativeText>
  );
};

const textTypeMap = new Map();
const setUpTextStyles = () => {
textTypeMap.set(TextType.bodyTextBold, styles.bodyTextBold);
};
setUpTextStyles();
export {TextType, setUpTextStyles};
export default memo(Text);

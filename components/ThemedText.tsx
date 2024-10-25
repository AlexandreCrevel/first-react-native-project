/**
 * ThemedText component is a custom Text component that adapts its color and style based on the current theme.
 * It supports different text types such as default, title, defaultSemiBold, subtitle, and link.
 *
 * @param {ThemedTextProps} props - The properties for the ThemedText component.
 * @param {TextProps} props.style - Additional styles to apply to the text.
 * @param {string} [props.lightColor] - The color to use in light mode.
 * @param {string} [props.darkColor] - The color to use in dark mode.
 * @param {'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'} [props.type='default'] - The type of text style to apply.
 * @param {Object} rest - Any other properties that can be passed to the Text component.
 *
 * @returns {JSX.Element} A Text component with the appropriate styles and colors based on the theme and type.
 */
import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});

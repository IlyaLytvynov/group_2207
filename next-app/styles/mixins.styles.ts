import {
  conteinerMaxWidth,
  contentPaddingTop, fontSizeBase,
  headerHeight, pagePadding
} from './variables.styles';

export const conteiner = {
  maxWidth: conteinerMaxWidth,
  padding: `0 ${ pagePadding }`,
  margin: '0 auto',
  width: '100%'
};

export const absoluteCenter = () => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
});

export const btnResetDefault = () => ({
  border: 'none',
  fontWeight: 500,
  fontSize: fontSizeBase,
  background: 'transparent',
  cursor: 'pointer'
});

export const absoluteCenterVertical = () => ({
  position: 'absolute' as any,
  top: '50%',
  transform: 'translateY(-50)'
});

export const pageContent = () => ({
  minHeight: `calc(100vh - ${ headerHeight })`,
  paddingTop: contentPaddingTop
});


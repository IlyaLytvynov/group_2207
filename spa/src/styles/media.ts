const size = {
  sm: '575px',
  md: '768px',
  lg: '992px',
  xl: '1400px'
};

export enum DEVICES {
  MOBILE = 'MOBILE',
  PHABLET = 'PHABLET',
  TABLET = 'TABLET',
  LAPTOP = 'LAPTOP',
  DESKTOP = 'DESKTOP'
}

const screens = {
  [DEVICES.MOBILE]: `(max-width: calc(${ size.sm } - 1px))`,
  [DEVICES.PHABLET]: `(max-width: calc(${ size.md } - 1px))`,
  [DEVICES.TABLET]: `(max-width: calc(${ size.lg } - 1px))`,
  [DEVICES.LAPTOP]: `(max-width: calc(${ size.xl } - 1px))`,
  [DEVICES.DESKTOP]: `(min-width: calc${ size.xl })`,
};

export const media = (device: DEVICES, props: any) => (
  {
    [`@media ${ screens[device] }`]: {
      ...props
    }
  }
);

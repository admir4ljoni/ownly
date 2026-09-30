import { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#4363E1',
    colorBorderSecondary: '#e6e8ea',
    colorLink: '#4363E1',
    colorLinkActive: '#3653C4',
    colorLinkHover: '#5F7AE5',
    colorText: '#061A33',
    colorTextHeading: '#76808F',
    fontFamily: 'Inter, sans-serif',
    colorError: '#EE3911',
    colorErrorBorderHover: '#FC6E75',
    borderRadius: 4,
    boxShadowSecondary: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
    boxShadowTertiary: '',
  },
  components: {
    Tooltip: {
      zIndexPopup: 1600,
    },
    InputNumber: {
      borderRadius: 2,
      boxShadow: 'none',
      colorBorder: '#E6E8EA',
      fontSize: 14,
      lineHeight: 1.214,
    },
    DatePicker: {
      borderRadiusSM: 2,
      cellActiveWithRangeBg: '#ECEFFC',
      cellHoverWithRangeBg: '#D0D8F7',
      cellRangeBorderColor: '#E6E8EA',
    },
  },
};

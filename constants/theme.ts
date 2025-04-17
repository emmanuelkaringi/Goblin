interface Theme {
    primary: string;
    secondary: string;
    background: string;
  }

  export const themes = {
    light: {
      primary: '#6B8E23', // Olive Green
      secondary: '#E2725B', // Terracotta
      background: '#FAF0E6', // Linen
    },
    dark: {
      primary: '#008080', // Deep Teal
      secondary: '#FFDAB9', // Soft Peach
      background: '#333333', // Charcoal
    },
  };

  export const defaultTheme = 'light';
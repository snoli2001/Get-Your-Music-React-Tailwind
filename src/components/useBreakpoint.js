import resolveConfig from 'tailwindcss/resolveConfig';
import theme from '../theme';
import { useMediaQuery } from 'react-responsive';


const Tailwind = resolveConfig(theme);

export default function useBreakPoint(breakPoint){
  return useMediaQuery({
    query: `(min-width:${Tailwind.theme.screens[breakPoint]})`,
  });
}

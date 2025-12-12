interface Breakpoint {
  sm: string;
  md: string;
  lg: string;
}

export const breakpoint: Breakpoint = {
  sm: `(max-width: 768px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
}
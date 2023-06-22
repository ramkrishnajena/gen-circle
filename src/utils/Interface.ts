export interface CircleInt {
  x: number;
  y: number;
  color: string;
}

export interface ButtonProps {
  name: string;
  fn: (event: React.MouseEvent) => void;
}

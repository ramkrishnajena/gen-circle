export interface CircleInt {
  x: number;
  y: number;
  color: string;
  size?: number;
}

export interface ButtonProps {
  name: string;
  fn: (event: React.MouseEvent) => void;
}

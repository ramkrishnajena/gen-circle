const colors: string[] = [
  "#DA4747",
  "#DA9647",
  "#ABDA47",
  "#4ADA47",
  "47BFDA",
  "#4755DA",
];

export function generateRandomColor() {
  const random = Math.floor(Math.random() * 6);
  return colors[random];
}

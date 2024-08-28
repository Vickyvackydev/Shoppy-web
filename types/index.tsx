export interface ButtonTypeProps {
  type: "submit" | "button";
  btnStyles: string;
  text: string;
  handleClick: any;
  disabled?: boolean;
}

export interface ProductDataProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  isPopular: boolean;
}

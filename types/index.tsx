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
  price: number;
  image: string;
  isPopular: boolean;
}
export interface FavoriteDataProps {
  name: string | undefined;
  category: string | undefined;
  price: number | undefined;
  image: string | undefined;
  isPopular: boolean | undefined;
}

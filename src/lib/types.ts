export interface ProductImage {
  url: string;
  alt: string;
}

export interface ColorVariant {
  name: string;
  hex: string;
  bubbleImage?: string;
  images: ProductImage[];
}

export interface LensOption {
  id: string;
  label: string;
  priceAdd: number;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  model: string;
  description: string;
  price: number;
  originalPrice: number | null;
  category: "eyeglasses" | "sunglasses" | "sport-eyewear";
  subcategory: string;
  gender: string;
  tag: string | null;
  colors: ColorVariant[];
  specs: {
    material: string;
    shape: string;
    type: string;
    dimensions: string;
    weight: string;
    lensWidth: string;
    bridgeWidth: string;
    templeLength: string;
  };
  sizes: string[];
  lensOptions: LensOption[];
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  selectedLens: LensOption;
  quantity: number;
}

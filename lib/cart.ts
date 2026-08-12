import { Product } from "./data";

export interface CartItem {
  id: number;
  slug: string;
  name: string;
  image: string;
  color: string;
  colorValue: string;
  quantity: number;
}

export const CART_STORAGE_KEY = "sigma-furniture-cart";
export const CART_UPDATED_EVENT = "sigma-cart-updated";

export function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    return JSON.parse(storedCart) as CartItem[];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart)
  );
}

export function emitCartUpdated() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function addItemToCart(
  product: Product,
  quantity: number,
  color: string
) {
  const currentCart = getStoredCart();

  const selectedColor =
    product.colors.find((option) => option.name === color) ??
    product.colors[0];

  if (!selectedColor) {
    return currentCart;
  }

  const existingItemIndex = currentCart.findIndex(
    (item) =>
      item.slug === product.slug &&
      item.color === selectedColor.name
  );

  if (existingItemIndex >= 0) {
    currentCart[existingItemIndex].quantity += quantity;
  } else {
    currentCart.push({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      color: selectedColor.name,
      colorValue: selectedColor.value,
      quantity,
    });
  }

  saveCart(currentCart);
  emitCartUpdated();

  return currentCart;
}

export function updateCartItemQuantity(
  slug: string,
  color: string,
  quantity: number
) {
  const currentCart = getStoredCart();

  const updatedCart = currentCart
    .map((item) =>
      item.slug === slug && item.color === color
        ? { ...item, quantity }
        : item
    )
    .filter((item) => item.quantity > 0);

  saveCart(updatedCart);
  emitCartUpdated();

  return updatedCart;
}

export function removeCartItem(
  slug: string,
  color: string
) {
  const currentCart = getStoredCart();

  const updatedCart = currentCart.filter(
    (item) =>
      !(item.slug === slug && item.color === color)
  );

  saveCart(updatedCart);
  emitCartUpdated();

  return updatedCart;
}
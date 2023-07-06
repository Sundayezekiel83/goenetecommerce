import { Category } from "@mui/icons-material";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const productsRef = collection(db, "products");

export const fetchProducts = async () => {
  const q = query(productsRef);

  const querysnapshot = await getDocs(q);
  const result = querysnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return result;
};

export const fetchProductsByCategory = async (category) => {
  const q = query(productsRef, where("categories", "==", category));

  const querysnapshot = await getDocs(q);
  const resultbycategory = querysnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return resultbycategory;
};

export const fetchProductsByBrand = async (brand) => {
  const q = query(productsRef, where("brand", "==", brand));

  const querysnapshot = await getDocs(q);
  const resultbyBrand = querysnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return resultbyBrand;
};

export const fetchProductById = async (id) => {
  const products = await fetchProducts();
  result = products.filter((product) => {
    return product.id == id;
  });
  return result[0];
};

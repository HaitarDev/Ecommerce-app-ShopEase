// Get All Categories
export async function getCategories() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    const categories = await data.slice(0, 5);

    return categories;
  } catch (err) {
    throw new Error("There is an error with fetching categories");
  }
}

// Get Products
export async function getProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const products = await res.json();

    return products;
  } catch (err) {
    throw new Error("There is an error with fetching products");
  }
}

// Filter By Category
export async function filterByCategory(id) {
  try {
    const res =
      await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}
    `);
    const Category = res.json();

    return Category;
  } catch (err) {
    throw new Error("There is an error with fetching in Filter By Category");
  }
}

// Get Product By Id
export async function getProductById(id) {
  try {
    const res = await fetch(` https://api.escuelajs.co/api/v1/products/${id}
    `);
    const product = res.json();

    return product;
  } catch (err) {
    throw new Error("There is an error with fetching single product by id");
  }
}

// Get Product By Name
export async function getProductByName(name) {
  try {
    const res =
      await fetch(` https://api.escuelajs.co/api/v1/products/?title=${name}

    `);
    const product = res.json();

    return product;
  } catch (err) {
    throw new Error("There is an error with fetching single product by name");
  }
}

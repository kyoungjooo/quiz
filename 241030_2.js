const products = [
  { id: 1, name: "Laptop", price: 1500, stock: 30, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 800, stock: 50, category: "Electronics" },
  { id: 3, name: "Desk", price: 300, stock: 20, category: "Furniture" },
  { id: 4, name: "Office Chair", price: 200, stock: 15, category: "Furniture" },
  {
    id: 5,
    name: "Headphones",
    price: 150,
    stock: 100,
    category: "Electronics",
  },
  { id: 6, name: "Monitor", price: 400, stock: 25, category: "Electronics" },
  { id: 7, name: "Tablet", price: 600, stock: 40, category: "Electronics" },
  { id: 8, name: "Coffee Table", price: 250, stock: 5, category: "Furniture" },
  { id: 9, name: "Bookshelf", price: 350, stock: 8, category: "Furniture" },
  {
    id: 10,
    name: "Smartwatch",
    price: 300,
    stock: 70,
    category: "Electronics",
  },
  { id: 11, name: "Blender", price: 100, stock: 60, category: "Appliances" },
  { id: 12, name: "Toaster", price: 50, stock: 80, category: "Appliances" },
  { id: 13, name: "Microwave", price: 200, stock: 35, category: "Appliances" },
  {
    id: 14,
    name: "Electric Kettle",
    price: 70,
    stock: 45,
    category: "Appliances",
  },
  {
    id: 15,
    name: "Gaming Console",
    price: 500,
    stock: 10,
    category: "Electronics",
  },
  {
    id: 16,
    name: "Refrigerator",
    price: 1200,
    stock: 5,
    category: "Appliances",
  },
  { id: 17, name: "Sofa", price: 900, stock: 7, category: "Furniture" },
  { id: 18, name: "Dining Table", price: 600, stock: 6, category: "Furniture" },
  { id: 19, name: "Fan", price: 80, stock: 50, category: "Appliances" },
  { id: 20, name: "Printer", price: 250, stock: 22, category: "Electronics" },
];

//새로운 제품 추가하기
products.push({
  id: 21,
  name: "Tablet",
  price: 600,
  stock: 40,
  category: "Electronics",
});
//console.log(products);

// 마지막 제품 제거하기
products.pop();
//console.log(products);

//첫 번째 제품 제거하기
products.shift();
//console.log(products);

//제품을 배열의 맨 앞에 추가하기
products.unshift({
  id: 0,
  name: "Keyboard",
  price: 100,
  stock: 50,
  category: "Electronics",
});
//console.log(products);

//특정 제품 수정하기
products.find((product) => {
  if (product.id === 3) {
    product.price = 350;
  }
});
//console.log(products);

//재고 추가하기
products.find((product) => {
  if (product.id === 2) {
    product.stock += 10;
  }
});
//console.log(products);

//제품 이름 업데이트하기
products.find((product) => {
  if (product.id === 4) {
    product.name = "Ergonomic Office Chair";
  }
});
//console.log(products);

//특정 카테고리 제품 전부 제거하기 (filter, pop)
const remove = products.filter((product) => {
  return product.category !== "Furniture";
});
//console.log(remove);

//제품의 첫 번째 항목과 마지막 항목 교환하기
const first = products.shift();
const last = products.pop();
products.unshift(last);
products.push(first);
//console.log(products);

//재고가 없는 제품들 제거하기 (filter)
const noStock = products.filter((product) => {
  return product.stock === 0;
});
//console.log(noStock.length === 0 ? "제고없는 물품 없음" : noStock);

//제품 이름 배열 반환
const itemName = products.map((product) => product.name);
//console.log(itemName);

//가격이 500 이상인 제품 필터링
const filterPrice = products.filter((product) => product.price >= 500);
//console.log(filterPrice);

//가격순으로 제품 정렬
products.sort((a, b) => b.price - a.price);
//console.log(products);

//재고가 부족한 제품 찾기
const result = products.some((product) => product.stock <= 10);
//console.log(result);

//전체 재고량 계산
const stockTotal = products.reduce((acc, cur) => acc + cur.stock, 0);
//console.log(stockTotal);

//카테고리 이름을 대문자로 변환
const upperCase = products.map((product) => ({
  ...product,
  name: product.name.toUpperCase(),
}));
//console.log(upperCase);

//특정 단어가 포함된 제품 필터링
const phoneFilter = products.filter((product) =>
  product.name.includes("phone")
);
//console.log(phoneFilter);

//가장 비싼 제품 찾기
const mostExp = products.reduce((acc, cur) => {
  acc.price > cur.price ? acc : cur;
  return acc;
});
//console.log(mostExp);

//카테고리별로 제품 그룹화
//category 기준으로 제품을 그룹화하여 객체 형태로 반환하세요.
const group = products.reduce((acc, cur) => {
  !acc[cur.category]
    ? (acc[cur.category] = [cur])
    : acc[cur.category].push(cur);
  return acc;
}, {});
//console.log(group);

//제품 이름 연결
const linkNames = products.map((product) => product.name);
const names = linkNames.join(",");
console.log(names);

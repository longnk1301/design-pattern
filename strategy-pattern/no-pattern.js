function getPrice(originalPrice, typePromotion = "default") {
  if (typePromotion === "preOrder") {
    return originalPrice * 0.1;
  }

  if (typePromotion === "promotion") {
    return originalPrice * 0.2;
  }

  // ...

  if (typePromotion === "default") {
    return originalPrice;
  }
}

console.log("Price:::", getPrice(100, "preOrder"));

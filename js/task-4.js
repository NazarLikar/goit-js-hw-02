function getShippingCost(country) {
  let prize;
  let message;

  switch (country) {
    case 'China':
      prize = 100;
      message = `Shipping to ${country} will cost ${prize} credits`;
      break;
    case 'Chile':
      prize = 250;
      message = `Shipping to ${country} will cost ${prize} credits`;
      break;
    case 'Australia':
      prize = 170;
      message = `Shipping to ${country} will cost ${prize} credits`;
      break;
    case 'Jamaica':
      prize = 120;
      message = `Shipping to ${country} will cost ${prize} credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }

  return message;
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

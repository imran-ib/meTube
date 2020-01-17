export default function(amount) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  };
  // if its a whole, dollar amount, leave off the .00
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("en-USD", options);
  return formatter.format(amount / 100);
}

//! ur-PK - Urdu (Islamic Republic of Pakistan)
//  export default function(amount) {
//    const options = {
//      style: "currency",
//      currency: "PKR",
//      minimumFractionDigits: 2
//    };
//   // if its a whole, dollar amount, leave off the .00
//    if (amount % 100 === 0) options.minimumFractionDigits = 0;
//    const formatter = new Intl.NumberFormat("ur-PK", options);
//    return formatter.format(amount / 100);
//  }

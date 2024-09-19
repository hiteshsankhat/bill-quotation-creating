export const getCurrentDate = (date: Date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
};

export const getPriceInRupeeFormat = (cost?: number) => {
  if (!cost) return "";
  return cost.toLocaleString("en-In", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
};

// TO-DO write logic to convert number to word
export const convertCostToWord = (cost: number) => {
  const single = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const double = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  return `Rupees ${cost} ${single[0]} ${double[0]} ${tens[0]}`;
};

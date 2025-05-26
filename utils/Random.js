export const generateReferralCode = () => {
  const namePart = "NEXA";
  const randomDigits = Math.floor(1000 + Math.random() * 9000); // Random 4 digit number
  return `${namePart}${randomDigits}`;
};

export const randomUsername = () => {
  const characters = "0123456789";
  let result = "";
  const length = 10;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return `NEXA${result}`;
};
export const generateTxHash = () => {
  return '0x' + Math.random().toString(16).substring(2) + Date.now().toString(16);
}



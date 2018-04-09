const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(driver) {
  const validLicense = ["AM", "A1", "A2", "A", "B1", "B"].includes(driver.driverLicense);
  const validDate = driver.licenseIssued <= new Date().getFullYear() - 2;
  const validBonus = driver.numberOfAccident == 0 || driver.bonus >= 0.7

  return validLicense && validDate && validBonus;
}


// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar

/* forEach */
const autos = ["audi", "mersedec", "bmw"];
autos.forEach((auto, index) => {
  index += 1;
  console.log(`${auto} aris ${index}`);
});
/* function */
const aboutMy = {
  NAme: "abeli",
  LasName: "Gulbani",
  fullName: function () {
    return `${this.NAme} ${this.LasName}`;
  },
};
/* metodi */
console.log(aboutMy.fullName());
const aboutMyWife = {
  NAme: "dodo",
  LasName: "jirkvelishvili",
  fullName() {
    return `${this.NAme} ${this.LasName}`;
  },
};
console.log(aboutMyWife.fullName());

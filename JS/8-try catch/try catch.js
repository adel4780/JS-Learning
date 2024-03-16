const person = {
  fname: "John",
  lname: "Doe",
  get fullName() {
    return `${this.fname} ${this.lname}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid input: " + value);
    }
    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("Enter a first name and a last name");
    }

    this.fname = parts[0];
    this.lname = parts[1];
  },
};
try {
  person.fullName = true; //
  person.fullName = "John";
} catch (error) {
  console.log(error);
}

console.log(person.fullName);

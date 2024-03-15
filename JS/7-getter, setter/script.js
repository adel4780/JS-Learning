const person = {
  fname: "John",
  lname: "Doe",
  get Fname() {
    return `${person.fname}`;
  },
  get Lname() {
    return `${person.lname}`;
  },
  set Fname(fname) {
    this.fname = fname;
  },
  set Lname(lname) {
    this.lname = lname;
  },
};
person.Fname = "ali";
person.Lname = "Karimi";
console.log(person.Fname);
console.log(person.Lname);

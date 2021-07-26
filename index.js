// 1
String.prototype.filter = function (word) {
  return this.replace(word, "");
};

console.log("This house is not nice!".filter("not"));

// 2
Array.prototype.bubbleSort = function () {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        var temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

var result = [6, 4, 0, 3, -2, 1].bubbleSort();
console.log("result" + result);

// 3
function exercise3() {
  const Person = function (name) {
    this.name = name;
  };

  const Teacher = function (name) {
    Person.call(this, name);
  };

  Teacher.prototype.teach = function (subject) {
    var text = this.name + " is now teaching " + subject;
    console.log(text);
  };

  var teacher = new Teacher("Sans");
  teacher.teach("Math");
}
exercise3();

// 4
function exercise4() {
  const Person = function (name, age) {
    this.name = name;
    this.age = age;
  };

  Person.prototype.greeting = function () {
    console.log(
      "Greetings, my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old."
    );
  };
  Person.prototype.salute = function () {
    console.log(
      "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"
    );
  };

  const Student = function (name, age, major) {
    Person.call(this, name, age);
    this.major = major
  };
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.greeting = function () {
    console.log(
      "Greetings, my name is " +
        this.name +
        " and I studying " +
        this.major
    );
  };

  const Professor = function (name, age, department) {
    Person.call(this, name, age);
    this.department = department
  };
  Professor.prototype = Object.create(Person.prototype);
  Professor.prototype.greeting = function () {
    console.log(
      "Greetings, my name is " +
        this.name +
        " and I in the " +
        this.department + " department"
    );
  };

  const professor = new Professor("Thanh", 24, "Health")
  professor.salute()
  professor.greeting()

  const student = new Student("Xuikia", 24, "IT")
  student.salute()
  student.greeting()
}
exercise4();

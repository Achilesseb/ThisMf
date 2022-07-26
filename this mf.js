const makeUser = function () {
  return {
    sentence: [],
    jump: function () {
      this.sentence.push("sleeping");
      return this;
    },
    speak: function () {
      this.sentence.push("speaking");
      return this;
    },
    run: function () {
      this.sentence.push("running");
      return this;
    },
    swim: function () {
      this.sentence.push("swiming");
      return this;
    },
    sleep: function () {
      this.sentence.push("sleeping");
      return this;
    },
    exec: function () {
      return `"${this.sentence.join(", ")}"`;
    },
  };
};
const user = makeUser();

console.log(user.exec());
console.log(
  user.sleep().swim().speak().jump().swim().sleep().run().run().exec()
);

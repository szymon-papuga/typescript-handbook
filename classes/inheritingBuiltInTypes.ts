class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}

const msgerr = new MsgError("foo")
msgerr.sayHello()

// 01-11-24 2:59PM - 3:45PM (46 mins)

class App {
  constructor() {
    this.serverName = "localhost";

    document
      .querySelector("button")
      .addEventListener("click", this.getServerName.bind(this));
    // document
    //   .querySelector("button")
    //   .addEventListener("click", this.getServerName);
  }

  getServerName() {
    console.log(this);
    // console.log(this.serverName);
  }
}

const app = new App();

// app.getServerName(); // localhost

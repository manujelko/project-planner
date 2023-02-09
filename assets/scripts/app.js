class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
  }
}

class App {
  static init() {
    const activeProjectLists = new ProjectList("active");
    const finishedProjectLists = new ProjectList("finished");
  }
}

App.init();

class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projItemElement = document.getElementById(this.id);
    const switchBtn = projItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click");
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }

  addProject() {}

  switchProject(projectId) {
    this.addProject();
    this.projects = this.projects.filter((p) => p.id !== projectsId);
  }
}

class App {
  static init() {
    const activeProjectLists = new ProjectList("active");
    const finishedProjectLists = new ProjectList("finished");
  }
}

App.init();

import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    // Define touchstart e click como argumento padão
    // de events caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuEvents() {
    if (this.menuButton) {
      this.events.forEach((evento) =>
        this.menuButton.addEventListener(evento, this.openMenu)
      );
    }
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuEvents();
    return this;
  }
}

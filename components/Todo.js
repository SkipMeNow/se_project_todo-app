export class Todo {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._element = null;
  }

  getView() {
    const template = document.querySelector(this._templateSelector);
    if (!template) {
      throw new Error(`Template not found: ${this._templateSelector}`);
    }

    const clone = template.content.querySelector(".todo").cloneNode(true);
    this._element = clone;

    this._populateData();
    this._setEventListeners();

    return this._element;
  }

  _populateData() {
    const { name, completed, id, date } = this._data;

    const nameEl = this._element.querySelector(".todo__name");
    const checkboxEl = this._element.querySelector(".todo__completed");
    const labelEl = this._element.querySelector(".todo__label");
    const dateEl = this._element.querySelector(".todo__date");

    nameEl.textContent = name;
    checkboxEl.checked = completed;

    checkboxEl.id = `todo-${id}`;
    labelEl.setAttribute("for", `todo-${id}`);

    const dueDate = new Date(date);
    if (!isNaN(dueDate)) {
      dateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _setEventListeners() {
    const deleteBtn = this._element.querySelector(".todo__delete-btn");
    deleteBtn.addEventListener("click", () => {
      this._element.remove();
    });

    const checkboxEl = this._element.querySelector(".todo__completed");
    checkboxEl.addEventListener("change", () => {
      this._data.completed = checkboxEl.checked;
    });
  }
}

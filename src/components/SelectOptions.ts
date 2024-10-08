import { Category } from "../interfaces/category.interface";

export const SelectOption = (data: Category, container: HTMLElement) => {
  const option = document.createElement("option");
  option.value = data.url;
  option.label = data.name;

  container.appendChild(option);
};

export const SelectOption = (data, container) => {
  const option = document.createElement("option");
  option.value = data.url;
  option.label = data.name;

  container.appendChild(option);
};

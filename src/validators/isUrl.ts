export const isUrl = (value: string) => {
  if (
    !value?.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)
  ) {
    return "Please enter a valid URL";
  }

  return true;
};

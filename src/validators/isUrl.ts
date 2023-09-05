export const isUrl = (value: string) => {
  if (
    !value?.match(
      /^(https?:\/\/)?([\da-zA-Z.-]+)\.([a-zA-Z]{2,6})(:\d+)?(\/[\w .-]*)*(\?[=&\w%.-]*)?(#[\w%&=.?-]*)?$/
    )
  ) {
    return "Please enter a valid URL";
  }

  return true;
};

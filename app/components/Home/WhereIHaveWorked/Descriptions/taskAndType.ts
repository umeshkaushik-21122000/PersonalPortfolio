export type task = [{ text: string; keywords: string[] }];

export const getTasksTextWithHighlightedKeyword = (text: string, keyword: string[] | []) => {
  if (keyword.length > 0) {
    const regex = new RegExp(keyword.join("|"), "gi");
    console.log("regex", regex);
    return text.replace(regex, match => `<span class="text-red-700">${match}</span>`);
  }
  return text;
};

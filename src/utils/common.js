/** BUSINESS LOGIC */
export const filterPrompts = (searchtext, posts = []) => {
  const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
  return posts.filter(
    (item) =>
      regex.test(item.creator.username) ||
      regex.test(item.creator.email) ||
      regex.test(item.tag) ||
      regex.test(item.prompt)
  );
};

/** UTILITIES */
export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

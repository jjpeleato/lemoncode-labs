import type { Book } from "../interfaces";

export const isBookRead = (books: Book[], search: string): boolean => {
  const book = books.find((book) => book.title === search);
  return book?.isRead ?? false;
};

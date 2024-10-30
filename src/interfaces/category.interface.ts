export interface CategoryApiResponse {
  slug: string;
  name: string;
  url: string;
}

export type Category = Omit<CategoryApiResponse, "url">;

export default interface GetMangaInfoDTO {
  id: number;
  russianTitle: string;
  englishTitle?: string;
  romanifiedTitle?: string;
  author: string;
  rating: number;
  description: string;
}

export default interface CreateMangaDTO {
  russianTitle: string;
  englishTitle?: string;
  romanifiedTitle?: string;
  author: string;
  description: string;
}

export interface INoteContent {
  category?: string,
  content?: string,
  active?: boolean
}

export interface INote {
  id: number,
  create: string,
  category: string,
  content: string,
  active: boolean
}
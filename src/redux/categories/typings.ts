export type categories = [String]

export interface getCategoriesAction {
    type   : String,
    payload: categories
}
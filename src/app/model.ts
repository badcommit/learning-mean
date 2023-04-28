type Color = 'red' | 'black' | 'green' | 'blue'
export interface Paragraph {
  title: string,
  content: string
  color: Color,
}

const title = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const colors: Color[] =  ['red', 'black', 'green', 'blue']
export const MOCK_PARAGRAPHS: Paragraph[] = colors.map(e => {return {title, content, color: e}})

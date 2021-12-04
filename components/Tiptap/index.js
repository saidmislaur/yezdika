import { useEditor, EditorContent } from '@tiptap/react'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
    content: '<p>Hello World! 🌎️</p>',

  })

  const addImage = () => {
    const url = window.prompt('URL')
    if (url) {
        editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <div>
    <button onClick={addImage}>
        add image from URL
    </button>
    <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap;
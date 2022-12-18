// toast ui editor
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

export default function LoungeEditor({ forwardedRef }) {
  return (
    <Editor
      ref={forwardedRef}
      initialValue='자유 게시판 🙌'
      height='400px'
      initialEditType='wysiwyg'
      previewHighlight={false}
      autofocus={false}
      hideModeSwitch={true}
      toolbarItems={[
        ['heading', 'bold'],
        ['ul', 'ol', 'task'],
        ['table', 'image', 'link'],
      ]}
      // hooks={editorImageHook}
    />
  )
}

import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

export default function LoungeEditor({ forwardedRef }) {
  return (
    <Editor
      ref={forwardedRef}
      initialValue='여기에 댓글을 입력하세요'
      height='300px'
      initialEditType='wysiwyg'
      previewHighlight={false}
      autofocus={false}
      hideModeSwitch={true}
      toolbarItems={[['bold', 'italic', 'strike'], ['quote']]}
    />
  )
}

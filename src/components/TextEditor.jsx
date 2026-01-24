import { useState, useCallback } from "react";
import { Editor, Toolbar, BtnBold, BtnItalic, EditorProvider, BtnBulletList, BtnLink, BtnStyles, BtnNumberedList, BtnUnderline, BtnUndo, BtnRedo } from "react-simple-wysiwyg";

function TextEditor() {
  const [content, setContent] = useState("");

  const handleChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const htmlContent = <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}/>

  return (
    <div className="w-full">
        <EditorProvider>
      <Editor className="bg-white" value={content} onChange={handleChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnBulletList />
          <BtnLink />
          <BtnStyles />
          <BtnNumberedList />
          <BtnUnderline />
          <BtnUndo />
          <BtnRedo />
        </Toolbar>
      </Editor>
      </EditorProvider>

      <div className="p-4 rounded">
          {htmlContent}
        </div>


    </div>
  );
}

export default TextEditor;

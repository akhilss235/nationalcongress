import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Row } from "react-bootstrap";

function MyEditor() {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Start editing...</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        config={{
          toolbar: [
            "undo",
            "redo",
            "|", // Undo and Redo
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "|", // Basic formatting: Bold, Italic, Underline, Strikethrough
            "fontFamily",
            "fontSize",
            "|", // Font family and Font size
            "alignment",
            "|", // Alignment (left, center, right, justify)
            "bulletedList",
            "numberedList",
            "|", // Lists (unordered and ordered)
            "link",
            "imageUpload",
            "codeBlock",
            "|", // Insert link, Insert image, Code block
            "sourceEditing", // View source code button
            "|",
            "heading",
            "|",
            "fontfamily",
            "fontsize",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "subscript",
            "superscript",
            "code",
            "|",
            "link",
            "uploadImage",
            "blockQuote",
            "codeBlock",
            "|",
            "alignment",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
          ],
          alignment: {
            options: ["left", "center", "right", "justify"],
          },
          fontSize: {
            options: ["small", "default", "big", "18", "24", "36"],
          },
          fontFamily: {
            options: [
              "default",
              "Arial, Helvetica, sans-serif",
              "Courier New, Courier, monospace",
              "Georgia, serif",
              "Lucida Sans Unicode, Lucida Grande, sans-serif",
              "Tahoma, Geneva, sans-serif",
              "Times New Roman, Times, serif",
              "Trebuchet MS, Helvetica, sans-serif",
              "Verdana, Geneva, sans-serif",
            ],
          },
          fontColor: {
            colors: [
              { color: "hsl(0, 0%, 0%)", label: "Black" },
              { color: "hsl(0, 0%, 30%)", label: "Dim grey" },
              { color: "hsl(0, 0%, 60%)", label: "Light grey" },
              { color: "hsl(0, 0%, 100%)", label: "White" },
            ],
          },
          fontBackgroundColor: {
            colors: [
              { color: "hsl(0, 0%, 0%)", label: "Black" },
              { color: "hsl(0, 0%, 30%)", label: "Dim grey" },
              { color: "hsl(0, 0%, 60%)", label: "Light grey" },
              { color: "hsl(0, 0%, 100%)", label: "White" },
            ],
          },

          colorPicker: {
            columns: 5,
          },
          image: {
            toolbar: [
              "imageTextAlternative",
              "imageStyle:full",
              "imageStyle:side",
            ],
            upload: {
              panel: {
                items: ["insertImage", "imageUpload"],
              },
            },
          },
        }}
      />
    </div>
  );
}

export default MyEditor;

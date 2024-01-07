import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; // You can choose a different build if needed

function App() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data)
    setFormData({
      ...formData,
      message: data,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className="text-dark">Form</h1>
      <form onSubmit={handleFormSubmit}>
        {/* email */}
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="email"
        />
        <br />
        {/* textarea message */}
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="message"
        />
        {/* CKEditor */}
        <CKEditor
          editor={ClassicEditor}
          data={formData.message}
          onChange={handleEditorChange}
          config={
            {
              ckfinder: {
                uploadUrl: `http://localhost:3000/upload`
              },
              // *["undo", "redo", "bold", "italic", "blockQuote", "ckfinder", "imageTextAlternative", "imageUpload", "heading", "imageStyle:full", "imageStyle:side", "link", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells"]*
              toolbar: [
                'heading',
                '|',
                'bold', 'italic', 'blockQuote',
                '|',
                'ckfinder',
                'link', 'numberedList', 'bulletedList',
                '|',
                'imageUpload', 'imageTextAlternative', 'imageStyle:full', 'imageStyle:side',
                'mediaEmbed',
                '|',
                'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells',
                '|',
                'undo', 'redo'
              ]
            }
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

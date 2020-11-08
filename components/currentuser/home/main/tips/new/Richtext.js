import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class Tiny extends Component {
  handleEditorChange = (content, editor) => {
    // console.log("Content was updated:", content);
    const { body, setBody } = this.props;
    setBody(content);
  };

  render() {
    return (
      <Editor
        // initialValue="<p>This is the initial content of the editor</p>"
        apiKey="zt4g18jgsb1sbq6khpmwcso21gfxb9hc0qbgcwqh33jzj51m"
        init={{
          height: 350,
          menubar: true,
          plugins: "codesample",
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
          ],
          toolbar: "codesample",

          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "codesample",
          ],
          toolbar:
            "undo redo | formatselect | codesample| bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help ",
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default Tiny;

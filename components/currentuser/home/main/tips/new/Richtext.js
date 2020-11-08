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
          plugins: "code",
          toolbar: "code",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "code",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help | code",
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default Tiny;

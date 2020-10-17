// import React, { Component } from "react";
// import { render } from "react-dom";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";

// function uploadImageCallBack(file) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://api.imgur.com/3/image");
//     xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
//     const data = new FormData();
//     data.append("image", file);
//     xhr.send(data);
//     xhr.addEventListener("load", () => {
//       const response = JSON.parse(xhr.responseText);
//       resolve(response);
//     });
//     xhr.addEventListener("error", () => {
//       const error = JSON.parse(xhr.responseText);
//       reject(error);
//     });
//   });
// }

// export default class EditorContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//     };
//   }

//   onEditorStateChange = (editorState) => {
//     // console.log(editorState)
//     // alert(JSON.stringify(editorState));
//     // this.setState({
//     //   editorState,
//     // });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div className="editor bg-white">
//         <Editor
//           editorState={editorState}
//           onEditorStateChange={this.onEditorStateChange}
//           toolbar={{
//             inline: { inDropdown: true },
//             list: { inDropdown: true },
//             textAlign: { inDropdown: true },
//             link: { inDropdown: true },
//             history: { inDropdown: true },
//             image: {
//               uploadCallback: uploadImageCallBack,
//               alt: { present: true, mandatory: true },
//             },
//           }}
//           toolbarClassName="toolbarClassName"
//           wrapperClassName="wrapperClassName"
//           editorClassName="editorClassName"
//           className="h-64"
//         />
//       </div>
//     );
//   }
// }

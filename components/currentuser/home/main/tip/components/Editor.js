import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

function TipEditor({ tip }) {
  return (
    <AceEditor
      mode="javascript"
      theme="dracula"
      //   onChange={onChange}
      defaultValue={tip.code}
      // value={tip.code}
      height={"50vh"}
      //   width="500px"
      width={"100%"}
      name="editor"
      fontSize={16}
      //   highlightActiveLine={true}
      editorProps={{ $blockScrolling: true }}
      //   setOptions={{
      //     enableBasicAutocompletion: true,
      //     enableLiveAutocompletion: true,
      //     enableSnippets: true,
      //   }}
    />
  );
}

export default TipEditor;

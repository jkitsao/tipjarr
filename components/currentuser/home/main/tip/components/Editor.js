import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-github";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-json";

function TipEditor({ tip }) {
  return (
    <AceEditor
      mode={tip?.code?.mode ? tip?.code?.mode : "javascript"}
      theme="dracula"
      //   onChange={onChange}
      defaultValue={tip?.code?.value ? tip?.code?.value : tip.code}
      // value={tip.code}
      height={"50vh"}
      //   width="500px"
      width={"100%"}
      showGutter={false}
      name="editor"
      fontSize={15}
      highlightActiveLine={false}
      className="font-mono"
      // editorProps={{ $blockScrolling: true }}
      //   setOptions={{
      //     enableBasicAutocompletion: true,
      //     enableLiveAutocompletion: true,
      //     enableSnippets: true,
      //   }}
    />
  );
}

export default TipEditor;

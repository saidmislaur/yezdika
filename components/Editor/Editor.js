import React from 'react';

const Editor = () => {
    const editorRef = React.useRef(null)
    React.useEffect(() => {
        if (!editorRef.current) {
          (async () => {
            const EditorJS = (await import("@editorjs/editorjs")).default;
            // const List = require("@editorjs/list");
            // const Checklist = require("@editorjs/checklist");
            // const LinkTool = require("@editorjs/link");
            // const Underline = require("@editorjs/underline");
            // const Marker = require("@editorjs/marker");
            // const Delimiter = require("@editorjs/delimiter");
            const Header = require("@editorjs/header");
            // const Quote = require("@editorjs/quote");
            // const SimpleImage = require("@editorjs/simple-image");
            const ImageTool = require("@editorjs/image");
            // const AttachesTool = require("@editorjs/attaches");
            // const Undo = require("editorjs-undo");
    
            // @ts-ignore
            editorRef.current = new EditorJS({
              holder: "editor",
              placeholder: "Введите текст...",
              minHeight: 600,
              data: {
                blocks: [],
              },
              onChange: () => {},
              tools: {
                Header,
                ImageTool
              },
            });
          })();
        }
        window.onbeforeunload = function () {
          return "Leaving this page will reset the wizard";
        };
      }, []);
    return (
        <div style={{marginTop: '50px'}} id='editor'>
            
        </div>
    )
}

export default Editor

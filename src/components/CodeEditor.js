// src/components/CodeEditor.js
import Codemirror from 'codemirror';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import React, { useEffect } from 'react';

const CodeEditor = () => {
    useEffect(() => {
        async function init(){}
        const editor = Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
            mode: { name: 'javascript' },
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
            matchBrackets: true,
        });
        return () => editor.toTextArea();
        init();
    }, []);

    return <textarea id="realtimeEditor"></textarea> ;
};

export default CodeEditor;

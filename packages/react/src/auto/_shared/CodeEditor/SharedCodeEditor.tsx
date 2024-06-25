import type { EditorOptions } from "prism-code-editor";
import { createEditor, type PrismEditor } from "prism-code-editor";
import { defaultCommands } from "prism-code-editor/commands";
import { cursorPosition } from "prism-code-editor/cursor";
import { highlightBracketPairs } from "prism-code-editor/highlight-brackets";
import "prism-code-editor/languages/clike";
import "prism-code-editor/layout.css";
import { matchBrackets } from "prism-code-editor/match-brackets";
import "prism-code-editor/prism/languages/javascript";
import "prism-code-editor/prism/languages/json";
import "prism-code-editor/scrollbar.css";
import "prism-code-editor/themes/github-light.css";
import type { ForwardedRef } from "react";
import React, { forwardRef, useEffect, useRef } from "react";
import "./code-editor-style.css";

/**
 * A wrapper around the prism-code-editor that provides a React component.
 *
 * It's based on the React example provided in the prism-code-editor GitHub repository.
 * https://github.com/FIameCaster/prism-code-editor
 */
const PrismEditorReact = forwardRef((props: EditorOptions & { testId?: string }, ref: ForwardedRef<PrismEditor>) => {
  const divRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<PrismEditor>();

  useEffect(() => {
    editorRef.current?.setOptions(props);
  }, [props]);

  useEffect(() => {
    const editor = (editorRef.current = createEditor(
      divRef.current,
      props,
      cursorPosition(),
      matchBrackets(),
      defaultCommands(),
      highlightBracketPairs()
    ));
    if (ref) typeof ref == "function" ? ref(editor) : (ref.current = editor);
    return editor.remove;
  }, []);

  return <div ref={divRef} data-testid={props.testId} />;
});

export const SharedCodeEditor = forwardRef(
  (props: { value: string; onChange: (value: string) => void; language?: string; testId?: string }, ref: ForwardedRef<PrismEditor>) => {
    return (
      <PrismEditorReact language={props.language ?? "json"} value={props.value} onUpdate={props.onChange} ref={ref} testId={props.testId} />
    );
  }
);

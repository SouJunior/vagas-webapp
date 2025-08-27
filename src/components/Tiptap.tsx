import { forwardRef, useImperativeHandle } from 'react';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import HardBreak from '@tiptap/extension-hard-break';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiListUnordered,
} from 'react-icons/ri';
import ToggleOption from './ToggleOption';

type Options = {
  bold: any;
  italic: any;
  strike: any;
  bulletList: any;
};

const Tiptap = forwardRef(({ onFieldChange }: any, ref: any) => {
  const LineBreak = HardBreak.extend({
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.setHardBreak(),
      };
    },
  });
  const editor: any = useEditor({
    extensions: [
      StarterKit.configure({
        hardBreak: false,
      }),
      LineBreak,
      Placeholder.configure({
        placeholder: 'Descrição da vaga',
        emptyEditorClass:
          'cursor-text before:content-[attr(data-placeholder)] before:absolute before:top-3 before:left-4 before:text-mauve-11 before:opacity-30 before-pointer-events-none',
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'w-full overflow-auto h-32 border py-3 px-4 mt-[10px] rounded-md block outline-none focus:border-blue',
      },
    },

    content: ``,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onFieldChange(html);
    },
  });

  useImperativeHandle(ref, () => ({
    clearContent() {
      editor.commands.clearContent();
    },
  }));
  const TOGGLE_OPTIONS = ['bold', 'italic', 'strike', 'bulletList'];
  const TOGGLE_FUNCTIONS: Options = {
    bold: () => editor.chain().focus().toggleBold().run(),
    italic: () => editor.chain().focus().toggleItalic().run(),
    strike: () => editor.chain().focus().toggleStrike().run(),
    bulletList: () => editor.chain().focus().toggleBulletList().run(),
  };
  return (
    <>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="flex rounded border border-gray bg-white text-lg text-blue shadow shadow-black/20"
        >
          {TOGGLE_OPTIONS.map((option, index) => {
            return (
              <ToggleOption
                editor={editor}
                type={option}
                key={index}
                toggleType={() => TOGGLE_FUNCTIONS[option as keyof Options]()}
              >
                {option === 'bold' ? (
                  <RiBold title="Negrito" />
                ) : option === 'strike' ? (
                  <RiStrikethrough title="Rasura" />
                ) : option === 'italic' ? (
                  <RiItalic title="Italico" />
                ) : (
                  <RiListUnordered title="Lista" />
                )}
              </ToggleOption>
            );
          })}
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
});

export default Tiptap;

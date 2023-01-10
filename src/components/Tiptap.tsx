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
                class: 'w-full overflow-auto h-32 border py-3 px-4 mt-[10px] rounded-md block outline-none focus:border-blue',
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

    return (
        <>
            {editor && (
                <BubbleMenu
                    editor={editor}
                    tippyOptions={{ duration: 100 }}
                    className="bg-white text-lg rounded shadow text-blue shadow-black/20 border border-gray"
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            editor.chain().focus().toggleBold().run();
                        }}
                        className={
                            editor.isActive('bold')
                                ? 'is-active hover:bg-gray-dark py-2 px-1 rounded'
                                : 'text-gray-darker hover:bg-gray-dark py-2 px-1 rounded'
                        }
                    >
                        <RiBold title="Negrito" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            editor.chain().focus().toggleItalic().run();
                        }}
                        className={
                            editor.isActive('italic')
                                ? 'is-active hover:bg-gray-dark py-2 px-1 rounded'
                                : 'text-gray-darker hover:bg-gray-dark py-2 px-1 rounded'
                        }
                    >
                        <RiItalic title="Italico" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            editor.chain().focus().toggleStrike().run();
                        }}
                        className={
                            editor.isActive('strike')
                                ? 'is-active hover:bg-gray-dark py-2 px-1 rounded'
                                : 'text-gray-darker hover:bg-gray-dark py-2 px-1 rounded'
                        }
                    >
                        <RiStrikethrough title="Rasura" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            editor.chain().focus().toggleBulletList().run();
                        }}
                        className={
                            editor.isActive('bulletList')
                                ? 'is-active hover:bg-gray-dark py-2 px-1 rounded'
                                : 'text-gray-darker hover:bg-gray-dark py-2 px-1 rounded'
                        }
                    >
                        <RiListUnordered title="Lista" />
                    </button>
                </BubbleMenu>
            )}
            <EditorContent editor={editor} />
        </>
    );
});

export default Tiptap;

<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menu__buttons">
        <button @click="commands.undo">
          <img src="../assets/icons/undo.svg" width="10px" height="10px" />
        </button>

        <button class="menubar__button" @click="commands.redo">
          <img src="../assets/icons/redo.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <img src="../assets/icons/bold.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <img src="../assets/icons/italic.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <img src="../assets/icons/strike.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <img src="../assets/icons/underline.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <img src="../assets/icons/code.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <img src="../assets/icons/paragraph.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <img src="../assets/icons/ul.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <img src="../assets/icons/ol.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <img src="../assets/icons/quote.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <img src="../assets/icons/code.svg" width="10px" height="10px" />
        </button>

        <button
          class="menubar__button"
          @click="
            commands.createTable({
              rowsCount: 3,
              colsCount: 3,
              withHeaderRow: false,
            })
          "
        >
          <img src="../assets/icons/table.svg" width="10px" height="10px" />
        </button>

        <span v-if="isActive.table()">
          <button class="menubar__button" @click="commands.deleteTable">
            <img
              src="../assets/icons/delete_table.svg"
              width="10px"
              height="10px"
            />
          </button>
          <button class="menubar__button" @click="commands.addColumnBefore">
            <img
              src="../assets/icons/add_col_before.svg"
              width="10px"
              height="10px"
            />
          </button>
          <button class="menubar__button" @click="commands.addColumnAfter">
            <img
              src="../assets/icons/add_col_after.svg"
              width="10px"
              height="10px"
            />
          </button>
          <button class="menubar__button" @click="commands.deleteColumn">
            <img
              src="../assets/icons/delete_col.svg"
              width="10px"
              height="10px"
            />
          </button>
          <button class="menubar__button" @click="commands.addRowBefore">
            <img
              src="../assets/icons/add_row_before.svg"
              width="10px"
              height="10px"
            />
          </button>
          <button class="menubar__button" @click="commands.addRowAfter">
            <img
              src="../assets/icons/add_row_after.svg"
              width="10px"
              height="10px"
            />
          </button>
          <button class="menubar__button" @click="commands.deleteRow">
            <img
              src="../assets/icons/delete_row.svg"
              width="10px"
              height="10px"
            />
          </button>
          <button class="menubar__button" @click="commands.toggleCellMerge">
            <img
              src="../assets/icons/combine_cells.svg"
              width="10px"
              height="10px"
            />
          </button>
        </span>
      </div>
    </editor-menu-bar>
    <editor-content class="editor__content" :editor="editor" />
    <button type="button" @click="SaveContent">Save Content</button>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from "tiptap-extensions";

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new Table({
            resizable: true,
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
        ],
        content: `
          <h2>Arbeitsjournal KWxx</h2>
          <table>
            <tr>
              <th>Datum</th>
              <th colspan="2">Tätigkeiten</th>
              <th>Reflexion</th>
            </tr>
            <tr>
              <td rowspan="4">Montag<br>19.04.2021</td>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
              <td rowspan="4">Was habe ich gelernt?</td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td rowspan="4">Dienstag<br>20.04.2021</td>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
              <td rowspan="4">Was habe ich gelernt?</td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td rowspan="4">Mittwoch<br>21.04.2021</td>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
              <td rowspan="4">Was habe ich gelernt?</td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td rowspan="4">Donnerstag<br>22.04.2021</td>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
              <td rowspan="4">Was habe ich gelernt?</td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td rowspan="4">Freitag<br>23.04.2021</td>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
              <td rowspan="4">Was habe ich gelernt?</td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Thema
              </td>
              <td>
                <ul>
                  <li></li>
                </ul>
              </td>
            </tr>
          </table>
          <h2>Leistungen</h2>
          <p>Mit diesen Leistungen bin ich ...</p>
          <table>
            <tr>
              <th>Ort</th>
              <th>... zufrieden</th>
              <th>... unzufrieden</th>
            </tr>
            <tr>
              <td>ZLI</th>
              <th>-</th>
              <th>-</th>
            </tr>
            <tr>
              <td>TBZ</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </table>
          <h2>Ziele</h2>
          <p>Dies nehme ich mir für die nächste Woche vor!</p>
          <table>
            <tr>
              <th>Ort</th>
              <th>Ziele</th>
            </tr>
            <tr>
              <td>ZLI</th>
              <th>-</th>
            </tr>
            <tr>
              <td>TBZ</th>
              <th>-</th>
            </tr>
          </table>
          <h2>Stimmungslage</h2>
        `,
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    onUpdate: ({ getHTML }) => {
      this.html = getHTML();
    },
    SaveContent() {},
  },
};
</script>
<style scoped>
.editor__content {
  border: 5px solid black;
}
.menu__buttons {
  text-align: left;
}
#button__underline {
  text-decoration: underline;
}
#button__bold {
  font-weight: bolder;
}
</style>
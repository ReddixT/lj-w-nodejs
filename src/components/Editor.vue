<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menu__buttons">
        <button
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
          id="button__bold"
        >
          B
        </button>
        <button
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
          id="button__underline"
        >
          U
        </button>
        <button
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>
        <button
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
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
          Table
        </button>

        <span v-if="isActive.table()">
          <button class="menubar__button" @click="commands.deleteTable">
            delete_table
          </button>
          <button class="menubar__button" @click="commands.addColumnBefore">
            add_col_before
          </button>
          <button class="menubar__button" @click="commands.addColumnAfter">
            add_col_after
          </button>
          <button class="menubar__button" @click="commands.deleteColumn">
            delete_col
          </button>
          <button class="menubar__button" @click="commands.addRowBefore">
            add_row_before
          </button>
          <button class="menubar__button" @click="commands.addRowAfter">
            add_row_after
          </button>
          <button class="menubar__button" @click="commands.deleteRow">
            delete_row
          </button>
          <button class="menubar__button" @click="commands.toggleCellMerge">
            combine_cells
          </button>
        </span>
      </div>
    </editor-menu-bar>
    <editor-content class="editor__content" :editor="editor" />
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
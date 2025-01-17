import {
  ContentBlockIcon,
  ListViewIcon,
  PaintBrushIcon,
  SettingsIcon,
  AddTemplateInstanceIcon,
} from "@webstudio-is/icons/svg";
import { html } from "@webstudio-is/sdk/normalize.css";
import type { WsComponentMeta, WsComponentPropsMeta } from "@webstudio-is/sdk";

export const rootComponent = "ws:root";

const rootMeta: WsComponentMeta = {
  category: "hidden",
  type: "container",
  label: "Global Root",
  icon: SettingsIcon,
  presetStyle: {
    html,
  },
};

const rootPropsMeta: WsComponentPropsMeta = {
  props: {},
};

export const portalComponent = "Slot";

export const collectionComponent = "ws:collection";

const collectionMeta: WsComponentMeta = {
  category: "data",
  order: 2,
  type: "container",
  label: "Collection",
  icon: ListViewIcon,
  stylable: false,
  template: [
    {
      type: "instance",
      component: collectionComponent,
      props: [
        {
          name: "data",
          type: "json",
          value: [
            "Collection Item 1",
            "Collection Item 2",
            "Collection Item 3",
          ],
        },
        {
          name: "item",
          type: "parameter",
          variableName: "collectionItem",
          variableAlias: "Collection Item",
        },
      ],
      children: [
        {
          type: "instance",
          component: "Box",
          children: [
            {
              type: "instance",
              component: "Text",
              children: [{ type: "expression", value: "collectionItem" }],
            },
          ],
        },
      ],
    },
  ],
};

const collectionPropsMeta: WsComponentPropsMeta = {
  props: {
    data: {
      required: true,
      control: "json",
      type: "json",
    },
  },
  initialProps: ["data"],
};

export const descendantComponent = "ws:descendant";

const descendantMeta: WsComponentMeta = {
  category: "internal",
  type: "control",
  label: "Descendant",
  icon: PaintBrushIcon,
  constraints: {
    relation: "parent",
    component: { $in: ["HtmlEmbed", "MarkdownEmbed"] },
  },
};

const descendantPropsMeta: WsComponentPropsMeta = {
  props: {
    selector: {
      required: true,
      type: "string",
      control: "select",
      options: [
        " p",
        " h1",
        " h2",
        " h3",
        " h4",
        " h5",
        " h6",
        " :where(strong, b)",
        " :where(em, i)",
        " a",
        " img",
        " blockquote",
        " code",
        " :where(ul, ol)",
        " li",
        " hr",
      ],
    },
  },
  initialProps: ["selector"],
};

export const blockComponent = "ws:block";

export const blockTemplateComponent = "ws:block-template";

export const blockTemplateMeta: WsComponentMeta = {
  category: "hidden",
  type: "container",
  icon: AddTemplateInstanceIcon,
  stylable: false,
  constraints: {
    relation: "parent",
    component: { $eq: blockComponent },
  },
};

const blockTemplatePropsMeta: WsComponentPropsMeta = {
  props: {},
  initialProps: [],
};

const blockMeta: WsComponentMeta = {
  category: "typography",
  type: "container",
  label: "Content Block",
  icon: ContentBlockIcon,
  constraints: [
    {
      relation: "ancestor",
      component: { $nin: [collectionComponent, blockComponent] },
    },
    {
      relation: "child",
      component: { $eq: blockTemplateComponent },
    },
  ],
  stylable: false,
  template: [
    {
      type: "instance",
      component: blockComponent,
      props: [],
      children: [
        {
          component: blockTemplateComponent,
          type: "instance",
          label: "Templates",
          children: [
            {
              component: "Paragraph",
              type: "instance",
              children: [],
            },
            {
              component: "Heading",
              type: "instance",
              label: "Heading 1",
              props: [
                {
                  name: "tag",
                  type: "string",
                  value: "h1",
                },
              ],
              children: [],
            },
            {
              component: "Heading",
              type: "instance",
              label: "Heading 2",
              props: [
                {
                  name: "tag",
                  type: "string",
                  value: "h2",
                },
              ],
              children: [],
            },
            {
              component: "Heading",
              type: "instance",
              label: "Heading 3",
              props: [
                {
                  name: "tag",
                  type: "string",
                  value: "h3",
                },
              ],
              children: [],
            },
            {
              component: "Heading",
              type: "instance",
              label: "Heading 4",
              props: [
                {
                  name: "tag",
                  type: "string",
                  value: "h4",
                },
              ],
              children: [],
            },
            {
              component: "Heading",
              type: "instance",
              label: "Heading 5",
              props: [
                {
                  name: "tag",
                  type: "string",
                  value: "h5",
                },
              ],
              children: [],
            },
            {
              component: "Heading",
              type: "instance",
              label: "Heading 6",
              props: [
                {
                  name: "tag",
                  type: "string",
                  value: "h6",
                },
              ],
              children: [],
            },
            {
              component: "List",
              type: "instance",
              label: "List (Unordered)",
              children: [
                {
                  component: "ListItem",
                  type: "instance",
                  children: [],
                },
              ],
            },
            {
              component: "List",
              type: "instance",
              label: "List (Ordered)",
              props: [
                {
                  name: "ordered",
                  type: "boolean",
                  value: true,
                },
              ],
              children: [
                {
                  component: "ListItem",
                  type: "instance",
                  children: [],
                },
              ],
            },
            {
              component: "Link",
              type: "instance",
              children: [],
            },
            {
              component: "Image",
              type: "instance",
              styles: [
                {
                  property: "marginRight",
                  value: {
                    type: "keyword",
                    value: "auto",
                  },
                },
                {
                  property: "marginLeft",
                  value: {
                    type: "keyword",
                    value: "auto",
                  },
                },
                {
                  property: "width",
                  value: {
                    type: "unit",
                    unit: "%",
                    value: 100,
                  },
                },
                {
                  property: "height",
                  value: {
                    type: "keyword",
                    value: "auto",
                  },
                },
              ],
              children: [],
            },
            {
              component: "Separator",
              type: "instance",
              children: [],
            },
            {
              component: "Blockquote",
              type: "instance",
              children: [],
            },
            {
              component: "HtmlEmbed",
              type: "instance",
              children: [],
            },
            {
              component: "CodeText",
              type: "instance",
              children: [],
            },
          ],
        },
        {
          type: "instance",
          component: "Paragraph",
          children: [
            {
              type: "text",
              value:
                "The Content Block component designates regions on the page where pre-styled instances can be inserted in ",
            },
            {
              type: "instance",
              component: "RichTextLink",
              children: [
                {
                  type: "text",
                  value: "Content mode",
                },
              ],
              props: [
                {
                  type: "string",
                  name: "href",
                  value: "https://wstd.us/content-block",
                },
              ],
            },
            {
              type: "text",
              value: ".",
            },
          ],
        },
        {
          type: "instance",
          component: "List",
          children: [
            {
              type: "instance",
              component: "ListItem",
              children: [
                {
                  type: "text",
                  value:
                    "In Content mode, you can edit any direct child instances that were pre-added to the Content Block, as well as add new instances predefined in Templates.",
                },
              ],
            },
            {
              type: "instance",
              component: "ListItem",
              children: [
                {
                  type: "text",
                  value:
                    "To predefine instances for insertion in Content mode, switch to Design mode and add them to the Templates container.",
                },
              ],
            },
            {
              type: "instance",
              component: "ListItem",
              children: [
                {
                  type: "text",
                  value:
                    "To insert predefined instances in Content mode, click the + button while hovering over the Content Block on the canvas and choose an instance from the list.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const blockPropsMeta: WsComponentPropsMeta = {
  props: {},
  initialProps: [],
};

export const coreMetas = {
  [rootComponent]: rootMeta,
  [collectionComponent]: collectionMeta,
  [descendantComponent]: descendantMeta,
  [blockComponent]: blockMeta,
  [blockTemplateComponent]: blockTemplateMeta,
};

export const corePropsMetas = {
  [rootComponent]: rootPropsMeta,
  [collectionComponent]: collectionPropsMeta,
  [descendantComponent]: descendantPropsMeta,
  [blockComponent]: blockPropsMeta,
  [blockTemplateComponent]: blockTemplatePropsMeta,
};

// components with custom implementation
// should not be imported as react component
export const isCoreComponent = (component: string) =>
  component === rootComponent ||
  component === collectionComponent ||
  component === descendantComponent ||
  component === blockComponent ||
  component === blockTemplateComponent;

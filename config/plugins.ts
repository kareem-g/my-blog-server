module.exports = ({ env }) => ({
upload: {
  config: {
    provider: 'strapi-provider-upload-supabase',
    providerOptions: {
      apiUrl: process.env.SUPABASE_API_URL,
    apiKey: process.env.SUPABASE_API_KEY,
    bucket: process.env.SUPABASE_BUCKET,
    directory: process.env.SUPABASE_DIRECTORY,
      options: {}
    },
    breakpoints: {
      xlarge: 1920,
      large: 1000,
      medium: 750,
      small: 500,
      xsmall: 64,
    },
  },
},

  "import-export-entries": {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: "", // default: "".
    },
  },
  // SEO Plugin
  seo: {
    enabled: true,
  },
  // publisher Plugin
  publisher: {
    enabled: true,
  },
  "fast-content": {
    enabled: true,
  },
  // CKEditor 5 Plugin
  ckeditor: {
    enabled: false,
    config: {
      plugin: {
        // disable data-theme tag setting //
        setAttribute: false,
        // disable strapi theme, will use default ckeditor theme //
        strapiTheme: false,
        // styles applied to editor container (global scope) //
        // styles:`
        // .ck.ck-editor__main .ck-focused{
        //   max-height: 700px;
        // }
        // :root{
        //   --ck-color-focus-border:red;
        //   --ck-color-text:red;
        // }
        // `
      },

      editor: {
        // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
        // if you need markdown support and output set: removePlugins: [''],
        // default is
        // removePlugins: ['Markdown'],
        removePlugins: [""],
        toolbar: {
          items: [
            "paragraph",
            "heading1",
            "heading2",
            "|",
            "bulletedList",
            "todoList",
            "numberedList",
            "|",
            "outdent",
            "indent",
            "horizontalLine",
            "|",
            "StrapiMediaLib",
            "insertTable",
            "blockQuote",
            "mediaEmbed",
            "link",
            "highlight",
            "|",
            "htmlEmbed",
            "sourceEditing",
            "code",
            "codeBlock",
            "|",
            "subscript",
            "superscript",
            "strikethrough",
            "specialCharacters",
            "|",
            "heading",
            "fullScreen",
            "undo",
            "redo",
          ],
        },
        balloonToolbar: [
          "bold",
          "italic",
          "fontColor",
          "FontBackgroundColor",
          "fontFamily",
          "fontSize",
          "alignment",
          "|",
          "removeFormat",
          "undo",
          "redo",
        ],
        fontSize: {
          options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
          supportAllValues: false,
        },
        fontFamily: {
          options: [
            "default",
            "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
            "Courier New, Courier, monospace",
            "Georgia, serif",
            "Lucida Sans Unicode, Lucida Grande, sans-serif",
            "Tahoma, Geneva, sans-serif",
            "Times New Roman, Times, serif",
            "Trebuchet MS, Helvetica, sans-serif",
            "Verdana, Geneva, sans-serif",
            "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
          ],
          supportAllValues: true,
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        fontBackgroundColor: {
          columns: 5,
          documentColors: 10,
        },
        image: {
          resizeUnit: "%",
          resizeOptions: [
            {
              name: "resizeImage:original",
              value: null,
              icon: "original",
            },
            {
              name: "resizeImage:25",
              value: "25",
              icon: "small",
            },
            {
              name: "resizeImage:50",
              value: "50",
              icon: "medium",
            },
            {
              name: "resizeImage:75",
              value: "75",
              icon: "large",
            },
          ],
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
            "linkImage",
            "resizeImage:25",
            "resizeImage:50",
            "resizeImage:75",
            "resizeImage:original",
          ],
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties",
            "toggleTableCaption",
          ],
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: "img",
              attributes: {
                sizes: true,
                loading: true,
              },
            },
          ],
        },
      },
    },
  },
});

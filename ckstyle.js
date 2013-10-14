/*
  Custom configuration for ckeditor.
 
  Configuration options can be set here. Any settings described here will be
  overridden by settings defined in the $settings variable of the hook. To
  override those settings, do it directly in the hook itself to $settings.
*/
CKEDITOR.editorConfig = function( config )
{
  // config.styleSet is an array of objects that define each style available
  // in the font styles tool in the ckeditor toolbar
  config.stylesSet =
  [
        /* Block Styles */
 
        // Each style is an object whose properties define how it is displayed
        // in the dropdown, as well as what it outputs as html into the editor
        // text area.
        { name : 'Heading 2'   , element : 'h2' },
        { name : 'Heading 3'   , element : 'h3' },
        { name : 'Heading 4'   , element : 'h4' },
        { name : 'Float Right', element : 'div', 
          attributes : { 
            'style' : 'float:right; margin-left: 5px; margin-bottom: 5px; margin-top: 5px;'
          } 
        },
        { name : 'Float Left', element : 'div', 
          attributes : { 
            'style' : 'float:left; margin-right: 5px; margin-bottom: 5px; margin-top: 5px;' 
          } 
        },
        { name : 'Preformatted Text', element : 'pre' },
        { name: 'Hightlight'  , element : 'span',
          attributes : {
            'style' : 'color: red; background-color: yellow;'
          }
        },
        { name : 'Clear floats', element : 'div',
          attributes : {
            'style' : 'clear: both;'
          }
        },
  ];
 
}
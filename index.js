module.exports = {
    /**
     * https://prettier.io/docs/en/options.html#print-width
     * Specify the line length that the printer will wrap on.
     */
    // printWidth: 80,

    /**
     * https://prettier.io/docs/en/options.html#tab-width
     * Specify the number of spaces per indentation-level.
     */
    tabWidth: 4,

    /**
     * https://prettier.io/docs/en/options.html#tabs
     * Indent lines with tabs instead of spaces.
     */
    useTabs: false,

    /**
     * https://prettier.io/docs/en/options.html#semicolons
     * Print semicolons at the ends of statements.
     */
    semi: true,

    /**
     * https://prettier.io/docs/en/options.html#quotes
     * Use single quotes instead of double quotes.
     */
    singleQuote: true,

    /**
     * https://prettier.io/docs/en/options.html#quote-props
     * Change when properties in objects are quoted.
     */
    quoteProps: 'consistent',

    /**
     * https://prettier.io/docs/en/options.html#jsx-quotes
     * Use single quotes instead of double quotes in JSX.
     */
    jsxSingleQuote: false,

    /**
     * https://prettier.io/docs/en/options.html#trailing-commas
     * Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
     */
    trailingComma: 'all',

    /**
     * https://prettier.io/docs/en/options.html#bracket-spacing
     * Print spaces between brackets in object literals.
     */
    bracketSpacing: true,

    /**
     * https://prettier.io/docs/en/options.html#bracket-line
     * Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
     */
    bracketSameLine: true,

    /**
     * https://prettier.io/docs/en/options.html#arrow-function-parentheses
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens: 'always',

    /**
     * https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
     * Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars. See whitespace-sensitive formatting for more info.
     */
    htmlWhitespaceSensitivity: 'strict',

    /**
     * https://prettier.io/docs/en/options.html#vue-files-script-and-style-tags-indentation
     * Whether or not to indent the code inside <script> and <style> tags in Vue files.
     */
    vueIndentScriptAndStyle: true,

    /**
     * https://prettier.io/docs/en/options.html#end-of-line
     */
    endOfLine: 'lf',

    /**
     * https://prettier.io/docs/en/options.html#embedded-language-formatting
     * Control whether Prettier formats quoted code embedded in the file.
     */
    embeddedLanguageFormatting: 'auto',

    /**
     * https://prettier.io/docs/en/options.html#single-attribute-per-line
     * Enforce single attribute per line in HTML, Vue and JSX.
     */
    singleAttributePerLine: true,
};

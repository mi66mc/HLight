langs = ['html', 'javascript', 'css'];
function highlight(e, lang) {
    lang = lang.toLowerCase();
    if (langs.includes(lang)) {
        var data = e.innerHTML;
        if (lang == 'html') {
            data = data.replace(/"(.*?)"/g, '<span class="html-code-str">&quot;$1&quot;</span>');
            data = data.replace(/&lt;(.*?)&gt;/g, '<span class="html-code-element">&lt;$1&gt;</span>');
            data = data.replace(/&lt;/g, '<span class="html-code-lt">&lt;</span>');
            data = data.replace(/&gt;/g, '<span class="html-code-gt">&gt;</span>');
        } else if (lang == 'javascript') {
            funcs = ["async", "yield", "function", "for", "in", "of", "typeof", "instanceof"]
            data = data.replace(/"(.*?)"/g, '<span class="js-code-str">&quot;$1&quot;</span>');
            data = data.replace(/^\/\/(.*)$/mg, '<span class="js-code-comment">//$1</span>');
            data = data.replace(/\/\*(((((?!\*\/).)*)|\n)*)\*\//gm, `<span class='js-code-comment'>/*$1*/</span>`);
            data = data.replace(/\.(.*)\(/g, '.<span class="js-code-func-exc">$1</span><span class="js-code-paren">(</span>');
            data = data.replace(/\)/g, '<span class="js-code-paren">)</span>');
            data = data.replace(/\(/g, '<span class="js-code-paren">(</span>');
            data = data.replace(/{/g, '<span class="js-code-ponctuation">{</span>');
            data = data.replace(/}/g, '<span class="js-code-ponctuation">}</span>');
            for (const k of funcs) {
                data = data.replace(new RegExp(k, "gi"), `<span class='js-code-func'>${k}</span>`);
            }
        } else if (lang == 'css') {
            data = data.replace(/\)/g, '<span class="css-code-paren">)</span>');
            data = data.replace(/\(/g, '<span class="css-code-paren">(</span>');
            data = data.replace(/{/g, '<span class="css-code-ponctuation">{</span>');
            data = data.replace(/}/g, '<span class="css-code-ponctuation">}</span>');
            data = data.replace(/,/g, '<span class="css-code-ponctuation">,</span>');
            data = data.replace(/(.*):/g, '<span class="css-code-prop">$1:</span>');
            data = data.replace(/(.*);/g, '<span class="css-code-prop2">$1</span>;');
            data = data.replace(/:/g, '<span class="css-code-ponctuation">:</span>');
            data = data.replace(/\.(.*)/g, '<span class="css-code-class">.$1</span>');
            data = data.replace(/\#(.*)/g, '<span class="css-code-id">#$1</span>');
            data = data.replace(/\/\*(((((?!\*\/).)*)|\n)*)\*\//gm, `<span class='css-code-comment'>/*$1*/</span>`);
        }
        e.innerHTML = data;
    } else {
        throw new Error("Invalid language string");
    }
}
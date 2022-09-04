const container = require("markdown-it-container");
// const markdownRenderer = require('markdown-it')();
// const matter = require('gray-matter');
// const md = require('./config')
const marked = require('marked')
 

function mdLoader (source: any,code:'') {
    // console.log(md.render(matter(md).content))
    // const content = marked.lexer(source)
    console.log(code,'2222')
    const tokens = marked.lexer(code)

    console.log(tokens,)
    debugger
  return  source.use(container, 'demo', {
        render: (tokens: any, index: any) => {
            if (tokens[index].nesting === 1) {
                let content = tokens[index + 1].content;
                return `<demo>
                            <template v-slot:view>${content}</template>
                            <template class="highlight" v-slot:highlight >   
                                    `
            } else {
                return `</template></demo>`
            }
        }
    })
};



module.exports = mdLoader
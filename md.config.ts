const container = require("markdown-it-container");
const markdownRenderer = require('markdown-it')();

module.exports = (md: any) => {
    md.use(container, 'demo', {
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

      
const md = require('markdown-it')();
const fs = require('fs');
const path = require('path');
const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--element-demo: ${content}  :element-demo-->
        `;
      }
      return '</demo-block>';
    }
  });
  
 
  md.use(mdContainer, 'tip');
  md.use(mdContainer, 'warning');
};

// 测试md转换
// const inputPath = path.resolve(__dirname, './alert.md');  
// const outputPath = path.resolve(__dirname, './alert.html');  
 
// const input = fs.readFileSync(inputPath, {encoding: 'utf8'});  
// const ounput = md.render(input);  
// fs.writeFileSync(outputPath, ounput, {encoding: 'utf8'});

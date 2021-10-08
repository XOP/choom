const fs = require('fs');
const path = require('path');

const theme_path = path.join(__dirname, '../src/theme');

const data = fs.readFileSync(path.join(theme_path, 'theme.module.css'), 'utf-8');

// targets "--space-half: 0.5rem;"
const tokens = data.match(/--[a-z, 0-9, -]+:\s.+;/gi);
const theme = {};

tokens.forEach((t) => {
  const _token = t.split(": ");
  const _name = _token[0];
  const _val = `var(${_name})`;

  let _key = _name.slice(2);

  if (_key.split("-").length > 1) {
    _key = _key.split("-").reduce((acc, cur, i) => {
      if (i === 0) return cur;

      return `${acc}${cur[0].toUpperCase()}${cur.slice(1)}`;
    }, "");
  }

  theme[_key] = _val;
});

const file = `export default ${JSON.stringify(theme, null, 2)}`;

fs.writeFileSync(path.join(theme_path, 'build', 'index.js'), file);

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/string-literal-sql-filter-expression');
var RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  "parser": "/Users/pksilen/Code/eslint-plugin-backk/node_modules/babel-eslint"
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('string-literal-sql-filter-expression', rule, {

  valid: [
    "const sqlFilter = new SqlFilter('price = :price', { price: 1 })"
  ],

  invalid: [
    {
      code: "const price = 1; const sqlFilter = new SqlFilter('price = ' + price, {})",
      errors: [{
        message: "SqlFilter class constructor's first parameter (sqlExpression) should be a string literal",
        type: "NewExpression"
      }]
    }
  ]
});

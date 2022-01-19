'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/string-literal-sort-expression');
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
ruleTester.run('string-literal-sort-expression', rule, {

  valid: [
    "const sortBy = new SortBy('', 'EXTRACT(DATE FROM lastModifiedTimestamp)')",
    "const sortBy = { sortExpression: 'EXTRACT(DATE FROM lastModifiedTimestamp)', sortDirection: 'ASC' }"
  ],

  invalid: [
    {
      code: "const timestampFieldName = 'lastModifiedTimestamp; DELETE * FROM order'; const sortBy = new SortBy('', 'EXTRACT(DATE FROM ' + timestampFieldName + ')')",
      errors: [{
        message: "SortBy class constructor's second parameter (fieldNameOrSortExpression) should be a string literal",
        type: "NewExpression"
      }]
    },
    {
      code: "const sortBy = { sortExpression: 'EXTRACT(DATE FROM ' + timestampFieldName + ')', sortDirection: 'ASC' }",
      errors: [{
        message: "SortBy object's sortExpression property should be a string literal",
        type: "ObjectExpression"
      }]
    }
  ]
});

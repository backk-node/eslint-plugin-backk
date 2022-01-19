# String literal SQLFilter expression (string-literal-sql-filter-expression)

Backk SortBy class sortExpression should be a string literal

## Rule Details

Reports if non-literal value is given for SortBy class constructor's sortExpression parameter.
Giving a non-literal value might indicate that potentially harmful client side data is used in sortExpression which might
make the to be executed SQL statement susceptible for SQL injection attack.

The SortBy class constructor's sqlExpression should be a string literal.
You can disable this rule only for cases where you know for sure that the supplied value for sortExpression is a SQL column name.
SQL column name should fulfill the following regular expression: /^[a-zA-Z_][a-zA-Z0-9_]*$/

Examples of **incorrect** code for this rule:
```js
const sortBy = new SortBy('', 'EXTRACT(DATE FROM ' + timestampFieldName + ')');
```

Examples of **correct** code for this rule:
```js
const sortBy = new SortBy('', 'EXTRACT(DATE FROM lastModifiedTimestamp)');
```

## Further Reading


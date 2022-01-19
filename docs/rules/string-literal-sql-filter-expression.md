# String literal SQLFilter expression (string-literal-sql-filter-expression)

Backk SQLFilter class constructor's sqlExpression is a string literal

## Rule Details

Reports if non-literal value is given for SQLFilter class constructor's sqlExpression parameter.
Giving a non-literal value might indicate that potentially harmful client side data is used in sqlExpression which might
make the to be executed SQL statement susceptible for SQL injection attack.

The SQLFilter class constructor's sqlExpression should be a string literal (which can contain placeholders for named parameters).

Examples of **incorrect** code for this rule:
```js
const sqlFilter1 = new SqlFilter('name LIKE %' + nameSubString + '%', {});
const sqlFilter2 = new SqlFilter(`price >= ${minPrice}`, {});
const sqlExpression = 'price <= ' + maxPrice;
const sqlFilter3 = new SqlFilter(sqlExpression, {});
```

Examples of **correct** code for this rule:
```js
const sqlFilter1 = new SqlFilter('name LIKE :nameSubString', { nameSubString: `%${nameSubString}%`});
const sqlFilter2 = new SqlFilter('price >= :minPrice', { minPrice });
const sqlFilter3 = new SqlFilter('price <= :maxPrice', { maxPrice });
```

## Further Reading


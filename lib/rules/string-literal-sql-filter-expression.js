"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "String literal SqlFilter expression",
      category: "Backk",
      recommended: true,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      NewExpression(newExpr) {
        if (
          newExpr.callee.name === "SqlFilter" &&
          newExpr.arguments &&
          newExpr.arguments[0] &&
          newExpr.arguments[0].type !== "Literal"
        ) {
          context.report(
            newExpr,
            `SqlFilter class constructor's first parameter (sqlExpression) should be a string literal`
          );
        }
      },
    };
  },
};

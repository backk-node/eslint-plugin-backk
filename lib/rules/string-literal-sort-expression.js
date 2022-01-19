"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "String literal SortBy sort expression",
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
          newExpr.callee.name === "SortBy" &&
          newExpr.arguments &&
          newExpr.arguments[1] &&
          newExpr.arguments[1].type !== "Literal"
        ) {
          context.report(
            newExpr,
            `SortBy class constructor's second parameter (fieldNameOrSortExpression) should be a string literal`
          );
        }
      },
      ObjectExpression(objExpr) {
        const hasSortDirectionProperty = !!(objExpr.properties || []).find(
          (property) => property.key.name === "sortDirection"
        );

        const sortExpressionProperty = (objExpr.properties || []).find(
          (property) => property.key.name === "sortExpression"
        );

        if (
          hasSortDirectionProperty &&
          sortExpressionProperty &&
          sortExpressionProperty.value.type !== "Literal"
        ) {
          context.report(
            objExpr,
            `SortBy object's sortExpression property should be a string literal`
          );
        }
      },
    };
  },
};

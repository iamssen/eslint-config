exports.typescript = {
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/typedef': [
    'error',
    {
      'arrayDestructuring': false,
      'arrowParameter': false,
      'objectDestructuring': false,
      'parameter': true,
      'propertyDeclaration': true,
      'memberVariableDeclaration': false,
      'variableDeclaration': false,
    },
  ],
};
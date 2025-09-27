# Troubleshooting or Common Errors

Some typical errors faced when working with Github actions are:

1. Workflow not triggering caused by:
   - The workflow is not placed inside the `.github.workflow` folder
   - Incorrect event configuration in the YAML (on: section)
   - File not committed to the expected branch

2. YAML Syntax Errors caused by:
   - Wrong indentation of using tabs instead of spaces
   - Missing colons(:) or misaligned blocks

    To Fix this:
    - Validate YAML using tools like [YAML Lint](https://www.yamllint.com/)
    - Stick to spaces (2 spaces for indent)
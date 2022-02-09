export class Validator {
  constructor(componentName) {
    this.componentName = componentName;
  }

  /**
   * validate
   * @param {string} propName
   * @param {*} propValue
   * @param {Array.*} propValues
   */
  validate = (propName, propValue, propValues) => {
    if (!propValues.includes(propValue)) {
      console.error(
        `${this.componentName}: ${propName} "${propValue}" is not supported. \nPossible values: ${propValues}`
      );
    }
  };

  /**
   * required
   * @param {string} propName 
   * @param {*} propValue 
   */
  required = (propName, propValue) => {
    if (propValue === undefined) {
      console.error(
        `${this.componentName}: ${propName} is required.`
      );
    }
  };
}

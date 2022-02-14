// @ts-check
/* eslint-disable class-methods-use-this */

class Normal {
  getNextStep(field) {
    return field.reduceRight((acc, row, i) => {
      const j = row.indexOf(null);
      if (acc.length === 0 && j !== -1) {
        return [i, j];
      }
      return acc;
    }, []);
  }
}

export default Normal;

import phoneReducer, {
  addDigitActionCreator,
  removeLastDigitActionCreator,
} from "./phoneSlice";

describe("Given the addDigitActionCreator function", () => {
  describe("When its called with the key 4 and the initial state is []", () => {
    test("Then is should return [4]", () => {
      const initialState = {
        phoneNumber: [],
      };
      const numberAdded = 4;

      const expectedResult = [4];

      const result = phoneReducer(
        initialState,
        addDigitActionCreator(numberAdded)
      );

      expect(result.phoneNumber).toEqual(expectedResult);
    });
  });
});

describe("Given the removeLastDigit function", () => {
  describe("When its called and the state is [4]", () => {
    test("Then is should return [4]", () => {
      const actualState = {
        phoneNumber: [4],
      };

      const expectedResult = [];

      const result = phoneReducer(actualState, removeLastDigitActionCreator());

      expect(result.phoneNumber).toEqual(expectedResult);
    });
  });
});

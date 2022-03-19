import * as appdos from "./appdos";
import * as math from "./math";


// Set all module functions to jest.fn
jest.mock("./math.js");


test("calls math.add", () => {
    appdos.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract", () => {
    appdos.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
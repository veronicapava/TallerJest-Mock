import * as appdos from "./appdos";
import * as math from "./math";

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
    appdos.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
    appdos.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
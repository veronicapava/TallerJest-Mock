import * as appdos from "./appdos";
import * as math from "./math";

test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(appdos.doAdd(1, 2)).toEqual("mock");
    // restore the original implementation
    addMock.mockRestore();
    expect(appdos.doAdd(1, 2)).toEqual(3);
});
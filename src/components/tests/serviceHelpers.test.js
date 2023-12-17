import { fetchData } from "../helpers/serviceHelpers.jsx";

describe("fetchData", () => {
  it("should fetch data successfully", async () => {
    const data = { name: "John Doe" };
    const response = {
      status: 200,
      json: jest.fn().mockResolvedValue(data),
    };
    global.fetch = jest.fn().mockResolvedValue(response);

    const result = await fetchData("https://example.com/api");

    expect(fetch).toHaveBeenCalledWith("https://example.com/api");
    expect(response.json).toHaveBeenCalled();
    expect(result).toEqual(data);
  });

  it("should handle API error", async () => {
    const response = {
      status: 500,
    };
    global.fetch = jest.fn().mockResolvedValue(response);
    global.alert = jest.fn();

    const result = await fetchData("https://example.com/api");

    expect(fetch).toHaveBeenCalledWith("https://example.com/api");
    expect(alert).toHaveBeenCalledWith("Api hatasi");
    expect(result).toBeUndefined();
  });
});

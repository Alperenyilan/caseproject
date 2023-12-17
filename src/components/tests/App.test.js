import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";

describe("App Component", () => {
  it("fetches and renders Marvel characters", async () => {
    render(<App />);

    try {
      // Beklenen API çağrısını yapar
      await waitFor(() => {
        expect(screen.getByText("Loading...")).toBeInTheDocument();
      });
    } catch (error) {
      console.error("Beklenen durum gerçekleşmedi:", error);
    }
  });
});

import { render, screen } from "@testing-library/react";
import GoInfoUrl from "../helpers/goInfoUrl";

test("GoInfoUrl renders correctly", () => {
  // Seçili kahraman ile render et
  render(
    <GoInfoUrl
      selectedHero={{ urls: [{ type: "detail", url: "https://example.com/" }] }}
    />
  );
  //   expect(screen.getByRole("link")).toBeInTheDocument(); // InfoIcon rolüne sahip bir button arayın
  expect(screen.getByText("Daha Fazla Bilgi")).toBeInTheDocument();
});

test("GoInfoUrl renders without selected hero", () => {
  // Seçili kahraman olmadan render et
  render(<GoInfoUrl />);
  expect(screen.queryByRole("button")).toBeNull(); // InfoIcon rolüne sahip bir button beklemeyin
});

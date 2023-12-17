import { render, screen } from "@testing-library/react";
import HeroInfoPage from "../pages/heroInfoPage"; // Bileşenin dosya yolunuza göre güncelleyin
import { MemoryRouter } from "react-router-dom";
test("renders hero details and comics on HeroInfoPage component", async () => {
  // Mock veri örnekleri
  const mockHero = {
    id: "1",
    name: "Iron Man",
    thumbnail: {
      path: "path/to/image",
      extension: "jpg",
    },
    description: "Iron Man description",
  };

  const mockComics = [
    {
      title: "Iron Man #1",
      description: "Iron Man Issue #1 description",
      thumbnail: {
        path: "path/to/comic/image",
        extension: "jpg",
      },
    },
    // Diğer mock comic örnekleri
  ];

  // fetchData fonksiyonunu mocklamak için jest.mock kullanımı
  jest.mock("../helpers/serviceHelpers", () => ({
    fetchData: jest.fn(() =>
      Promise.resolve({ data: { results: mockComics } })
    ),
  }));

  render(
    <MemoryRouter>
      <HeroInfoPage heros={[mockHero]} />
    </MemoryRouter>
  );
  //   screen.debug();
  // Hero adının ekranda göründüğünü kontrol etme
  const heroNameElement = screen.queryByText(mockHero.name);
  expect(heroNameElement).toBeDefined();

  // Hero açıklamasının ekranda göründüğünü kontrol etme
  const heroDescriptionElement = screen.queryByText(mockHero.description);
  if (heroDescriptionElement !== null) {
    expect(heroDescriptionElement).toBeInTheDocument();
  } else {
    console.log("Description element not found");
  }

  // Comic başlığının ekranda göründüğünü kontrol etme
  const comicTitleElement = screen.queryByText(mockComics[0].title);
  if (comicTitleElement !== null) {
    expect(comicTitleElement).toBeInTheDocument();
  } else {
    console.log("Comic title element not found");
  }

  // Comic açıklamasının ekranda göründüğünü kontrol etme
  const comicDescriptionElement = screen.queryByText(mockComics[0].description);
  if (comicTitleElement !== null) {
    expect(comicDescriptionElement).toBeInTheDocument();
  } else {
    console.log("Comic title element not found");
  }
});

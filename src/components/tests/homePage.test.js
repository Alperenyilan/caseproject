import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Bileşenin dosya yolunuza göre güncelleyin

test("renders a list of heroes with their names and images", () => {
  const mockHeroes = [
    {
      id: "1",
      name: "Iron Man",
      thumbnail: {
        path: "path/to/image",
        extension: "jpg",
      },
    },
    {
      id: "2",
      name: "Spider-Man",
      thumbnail: {
        path: "path/to/another/image",
        extension: "jpg",
      },
    },
    // Diğer kahramanları ekleyebilirsiniz
  ];

  render(
    <MemoryRouter>
      <HomePage heros={mockHeroes} />
    </MemoryRouter>
  );

  // Her bir kahramanın adının ekranda göründüğünü kontrol etme
  mockHeroes.forEach((hero) => {
    const heroNameElement = screen.getByText(hero.name);
    expect(heroNameElement).toBeInTheDocument();
  });

  // Her bir kahramanın resminin ekranda göründüğünü kontrol etme
  const heroImages = screen.getAllByAltText("1");
  expect(heroImages.length).toBe(mockHeroes.length);
});

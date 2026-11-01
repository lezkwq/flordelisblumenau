import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Route } from "@/routes/index";
const Page = Route.options.component as React.ComponentType;
afterEach(cleanup);
describe("Flor de Lis catalogue", () => {
  it("updates rose price, example and WhatsApp request together", () => {
    render(<Page />);
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    expect(screen.getByAltText(/Modelo de arranjo com 6 rosas/)).toBeInTheDocument();
    const request = screen.getByRole("link", { name: "Quero este modelo" });
    const url = new URL(request.getAttribute("href")!);
    expect(url.pathname).toBe("/5547991065803");
    expect(url.searchParams.get("text")).toContain("6 rosas");
    expect(url.searchParams.get("text")).toContain("132,00");
  });
  it("includes chosen occasion and colour in the order request", () => {
    render(<Page />);
    fireEvent.click(screen.getByRole("button", { name: "Agradecimento" }));
    fireEvent.click(screen.getByRole("button", { name: "Lilás" }));
    const request = screen.getByRole("link", { name: "Enviar pedido no WhatsApp" });
    const message = new URL(request.getAttribute("href")!).searchParams.get("text");
    expect(message).toContain("Agradecimento");
    expect(message).toContain("Lilás");
    expect(message).toContain("Flor de Lis");
  });
});


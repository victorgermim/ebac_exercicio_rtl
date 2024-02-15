import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from "./index";

describe("Teste para o componente PostComments", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComments />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários", () => {
    render(<PostComments />);
  
  
    fireEvent.change(screen.getByTestId("comment-input"), {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(screen.getByTestId("comment-submit"));
  
    
    fireEvent.change(screen.getByTestId("comment-input"), {
      target: { value: "Segundo comentário" },
    });
    fireEvent.click(screen.getByTestId("comment-submit"));
  
    expect(screen.getByTestId("comment-0")).toHaveTextContent("Primeiro comentário");
    expect(screen.getByTestId("comment-1")).toHaveTextContent("Segundo comentário");
  

    const comments = screen.queryAllByTestId(/comment-\d/);
    expect(comments).toHaveLength(2);
  });
  
});

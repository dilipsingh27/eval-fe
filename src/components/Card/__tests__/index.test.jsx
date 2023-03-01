import Card from "..";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Card", () => {
    it('should render Card component', () => {
        render(
            <Router>
                <Card />
            </Router>
        );
        expect(screen.getByTestId('card')).toBeInTheDocument();
    })
});
   
import { render, screen } from '@testing-library/react';
import Post from './index';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        const testImageUrl = "https://via.placeholder.com/200x200";
        const testText = "Teste";

        render(
            <Post imageUrl={testImageUrl}>
                {testText}
            </Post>
        );

        expect(screen.getByText(testText)).toBeInTheDocument();

        expect(screen.getByRole('img')).toHaveAttribute('src', testImageUrl);

    });
})

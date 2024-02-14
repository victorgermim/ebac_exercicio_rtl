// PostComments.test.tsx

import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index';

describe('PostComments component', () => {
    it('allows a user to add comments', () => {
        render(<PostComments />);

        fireEvent.change(screen.getByTestId('comment-input'), {
            target: { value: 'Primeiro comentário' }
        });
        fireEvent.click(screen.getByTestId('comment-submit'));


        fireEvent.change(screen.getByTestId('comment-input'), {
            target: { value: 'Segundo comentário' }
        });
        fireEvent.click(screen.getByTestId('comment-submit'));

        expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentário');
        expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentário');
        expect(screen.getAllByTestId(/^comment-/)).toHaveLength(2);
    });
});

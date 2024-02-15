import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
    it('Deve adicona 2 comentarios', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: { value: 'Adicionado via Teste' }
        })
        fireEvent.click(screen.getByTestId('button'))
        fireEvent.change(screen.getByTestId('comentario'), {
            target: { value: 'Adicionado segundo comentario via teste' }
        })
        fireEvent.click(screen.getByTestId('button'))
        expect(screen.getAllByTestId('elemento')).toHaveLength(2)
    })
})
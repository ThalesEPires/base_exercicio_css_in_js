import { FormEvent, useState } from 'react'

import { FormularioVagas, Botao, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({}: Props) => {
  const [] = useState<string>('')

  return (
    <FormularioVagas >
      <Campo />
      <Botao>
        Pesquisar
      </Botao>
    </FormularioVagas>
  )
}
export default FormVagas

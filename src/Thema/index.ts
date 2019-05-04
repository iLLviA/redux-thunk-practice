import * as Styled from 'styled-components'

export interface ThemaInterface {
    primaryColor: string
}

export const Thema = {
    primaryColor: "#e9e9e9"
}

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider
} = Styled as Styled.ThemedStyledComponentsModule<ThemaInterface>

export default styled
export { css, keyframes, ThemeProvider}
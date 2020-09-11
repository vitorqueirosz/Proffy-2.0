import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
            title: string;

            colors: {
                color: string,
                background: string,
                button: string;
            }
        }
}

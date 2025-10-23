export const up = (key) => (props) => 
    `@media (min-width: ${props.theme.breakpoints[key]})`;

export const down = (key) => (props) => 
    `@media (max-width: ${props.theme.breakpoints[key]})`;
import {clsx} from 'clsx'

interface IButton {
    size?: "large" | "medium" | "small";
    variants?: "contained" | "outlined" | "text";
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button = ({children, fullWidth, variants, size} : IButton) => {
    return (
        <button
        className={clsx('bg-blue-500 rounded-md text-white px-3 py-2 transition-colors', {
            'w-screen': fullWidth === true,

        })}
        >{children}</button>
    );
}
 
export default Button;
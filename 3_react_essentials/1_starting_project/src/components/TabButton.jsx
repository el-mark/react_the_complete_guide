export default function TabButton({children}) {
    function handleClick() {
        console.log('hola');
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}
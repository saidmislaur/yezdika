export default function Button({text, classes}) {
    return (
        <div>
            <button className={`btn btn_${classes}`}>{text}</button>
        </div>
    )
}
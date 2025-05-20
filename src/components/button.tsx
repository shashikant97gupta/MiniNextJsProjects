interface ButtonProps {
    onclick: () => void,
    label: string,
    disable?: boolean
}

const Button = ({onclick, label, disable=false} : ButtonProps ) => {
  return (
    <div className="bg-blue-100 text-blue-500 font-semibold py-2 px-4 border
     border-blue-500 rounded min-w-35 text-center">
        <button disabled={disable} onClick={onclick}>{label}</button>
    </div>
  )
}

export default Button
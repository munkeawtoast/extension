const ActiveItem = () => {
  return (
    <div className="group" data-state="open">
      <button className="bg-red  group-[data-state=open]:bg-blue">test</button>
    </div>
  )
}

export default ActiveItem

// passing arrays and objects using props
 function User(props) {
    //destructuring using props
  return (
    <div>
      {/* replace props */}
      <h1>
        {props.person.message} {props.person.name} {props.person.emoji} {props.person.seatNumbers}
      </h1>
    </div>
  )
}

export default User

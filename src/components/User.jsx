// passing arrays and objects using props
 function User({name, message, emoji, seatNumbers}) {
    //destructuring using props
  return (
    <div>
      {/* replace props */}
      <h1>
        {message} {name} {emoji} {seatNumbers}
      </h1>
    </div>
  )
}

export default User

// passing arrays and objects using props
 function User({person}) {
    //destructuring using props
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.emoji} {person.seatNumbers}
      </h1>
    </div>
  )
}

export default User

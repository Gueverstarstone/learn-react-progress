//Destructuring props
 function User({name, message, emoji}) {
    //destructuring using props
  return (
    <div>
      {/* replace props */}
      <h1>
        {message} {name} {emoji}
      </h1>
    </div>
  )
}

export default User

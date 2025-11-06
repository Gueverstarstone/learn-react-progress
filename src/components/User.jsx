//Destructuring props
 function User(props) {
    console.log(props)
    //destructuring using props
    const { name ,message } = props;
  return (
    <div>
      {/* replace props */}
      <h1>{message} {name}</h1>
    </div>
  )
}

export default User

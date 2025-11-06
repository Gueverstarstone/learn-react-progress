 //props are values passed to components to make them dynamic
 function User(props) {
  return (
    <div>
      <h1>{props.message} {props.name}</h1>
    </div>
  )
}

export default User

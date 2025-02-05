export default function UserCard({ user, onSelect }) {
  return (
    <div 
      onClick={onSelect} 
      style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }}
    >
      <h3>ID: {user.id}</h3>
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>
        Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
      </p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

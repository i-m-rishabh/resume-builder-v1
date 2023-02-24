export default function PersonelInfo({ name, phone, email }) {
  return (
    <div className="personelInfo">
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

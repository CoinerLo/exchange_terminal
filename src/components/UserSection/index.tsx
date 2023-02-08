import './UserSection.css'

const mockData = {
  firstName: 'Игорь',
  lastName: 'Ломакин',
  contact: '@CoinerLo',
  avatar: 'Здесь будет жить ваш аватар',
}

export const UserSection = () => {
  return (
    <div className="user-section">
      <h1 className="user-section-title">Информация о пользователе</h1>
      <div className="user-section-avatar">
        <p>{mockData.avatar}</p>
      </div>
      <h2 className="user-section-name">{`${mockData.firstName} ${mockData.lastName}`}</h2>
      <h3 className="user-section-contact">Контанкты: {mockData.contact}</h3>
    </div>
  )
}

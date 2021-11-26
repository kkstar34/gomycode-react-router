export const Category = ({match, data}) => {

    

    let user = data.find(user => user.id == match.params.id)
    

    return user ? (
        <div>
            <h2>{user.name}--{user.lastName}</h2>
             <p>Age : {user.age}</p>
        </div>
    ) : "Utilisateur introuvable"
}
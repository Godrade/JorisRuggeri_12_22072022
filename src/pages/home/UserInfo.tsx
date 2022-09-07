export const UserInfo = ({ user }) => {
    return (
        <div className="col-12">
            <h1 className="title">Bonjour <span className="title-name">{user}</span></h1>
            <p className="objectif-success">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}
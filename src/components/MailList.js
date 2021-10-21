import Mail from "./Mail";

const MailList = ({mail, selectEmail, color, activeId}) => {

    return(
        <div className="space-y-3 overflow-y-auto pr-2">
            {mail.map((mail) => <Mail key={mail.id} selected={activeId === mail.id} mail={mail} color={color} selectEmail={selectEmail}/> )}
        </div>
    );
}

export default MailList;